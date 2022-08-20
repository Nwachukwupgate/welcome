import React, {useState,useEffect}  from 'react'
import styles from "../../../../styles/compCheck.module.css"
import EasyHTTP from '../../../../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const simpleHttp =  new EasyHTTP()
const initFrameworkArray=[]
let file = null


if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){var api_origin = 'http://localhost:3333'}else{var api_origin = 'https://api.droomwork.io'}

function DevChoice({handleClick, steps, currentStep}) {
  const [tags, setTags] = React.useState([])
  const[display, setDisplay] = useState(false)
  const[state, setState] = useState([])
  const[showFramework, setShowFramework] = useState(false)
  const[showPrice, setShowPrice] = useState(false)
  const[frameWork, setFramework] = useState([])
  const[languages, setLanguages] = useState([])
  const[price, setPrice] = useState([])
  const[suggest, setSuggest] = useState([])
  const[value, setValue] = useState("")
  const [fileName, setFileName] = useState('')


  const handleJDChange = (e) => {
      setFileName(e.target.files[0].name)
      const file = e.target.files[0]
      
      // hiddenFileInput.current.click()
      var ext = file.name.split('.').pop()
      console.log(ext,'file cv ext')
      if(ext=="docx" || ext=="doc" || ext=="pdf"){
      if(file.size >1000000){
        return toast.error('CV size is too large')}
        
      }else{return toast.error('Kindly upload your CV')}
    
      return file
  };

  const cancelFile = (e) => {
    e.preventDefault()
    setFileName('')
}

  const onChange = (event) => {
    setValue(event.target.value);
  };

  // const onSearch = (searchTerm) => {
  //   setValue(searchTerm);
  //   console.log("search ", searchTerm);
  //   tags.push(searchTerm)
  // };
  const handleSelectSkill = async(searchedSkill,searchedSkillId) => {
    setValue(searchedSkill)
    const numberOfSkill = tags.length
    console.log(numberOfSkill,'length')
    if(numberOfSkill >=3 ){
     return  toast.error('Max Number of skill is 3')
    }else{
      tags.push({id:searchedSkillId,name:searchedSkill})
      localStorage.setItem('userSkills', JSON.stringify(tags))
    }
 
  
  }

  const showClick = () => {
    setDisplay(!display)
  }

  const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)])
    localStorage.setItem('userSkills', JSON.stringify(tags))
  
	};

  const addTags = event => {
		if (event.target.value !== "") {
    // if (event.key === "Enter" && event.target.value !== "") {
			setTags([...tags, event.target.value]);
			event.target.value = "";
		}
	}

  useEffect(() =>{
    async function fetchData() {
    const resStack = await simpleHttp.getNoAuth(`/api/v1/comp/getStacks`)
    if(resStack.status == true){setState(resStack.data)}else{toast.error(resStack.error.message)}
    }
    fetchData();
}, [])

const handleSelectStack = async(e)=>{
  //if stack selected b4 just update
  const stackId = e.target.value
  const res = await simpleHttp.get(`/api/v1/comp/getFrameworksBasedOnStacks/${stackId}`)
  if(res.status == true){
    setFramework(res.data)
    setShowFramework(true)
  }else{toast.error(res.error.message)}

  const location = JSON.parse(localStorage.getItem("location"))
  const ress = await simpleHttp.get(`/api/v1/all/getPrice/${location}/${stackId}`)
  if(ress.status == true){
    setPrice(ress.data)
    setShowPrice(true)
  }else{toast.error(ress.error.message)}
  setShowFramework(true)
  const availableCompInfoObj = JSON.parse(localStorage.getItem("compInfoObj"))
  const updatedCompInfoObj = Object.assign(availableCompInfoObj,{'stack':stackId})
  console.log(updatedCompInfoObj,'updatedInfo')
  localStorage.setItem('compInfoObj', JSON.stringify(updatedCompInfoObj))
}

const handleSelectPrice = async(e)=>{
  const priceRange = e.target.value
  const availableCompInfoObj = JSON.parse(localStorage.getItem("compInfoObj"))
  const updatedCompInfoObj = Object.assign(availableCompInfoObj,{'salary_range':priceRange})
  console.log(updatedCompInfoObj,'updatedInfo')
  localStorage.setItem('compInfoObj', JSON.stringify(updatedCompInfoObj))
}
const handleSelectFramework = async(e)=>{
  const singleId = e.target.id
  //max number is 3
  function checkIfClicked(single) {return single == singleId}
  const checked = initFrameworkArray.find(checkIfClicked)
  console.log(checked, 'Has been clicked?')
  if (checked !== undefined) { // has been checked before, remove id from stat
  var selectedFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
  let updatedFrameworks = selectedFrameworks.filter((id) => 
  {return id !== parseInt(singleId)})
  localStorage.setItem('userFrameworks', JSON.stringify(updatedFrameworks))

  }else{
    initFrameworkArray.push(parseInt(singleId))
    localStorage.setItem('userFrameworks', JSON.stringify(initFrameworkArray))
  }
  
}

const handleGetSkills = async(e) => {
  setValue(e.target.value)

  const name = e.target.value
  const data = {name}
  const res = await simpleHttp.post(`/api/v1/all/searchForDevSkills`,data)
  if(res.status == true){
  setSuggest(res.data)
  }else{
    toast.error(res.message)
  }}


  const submitHireDetails = async(e)=>{
    e.preventDefault()
    var compInfoObj = JSON.parse(localStorage.getItem("compInfoObj"))
    var userFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
    var userSkills = JSON.parse(localStorage.getItem("userSkills"))
    var formData = new FormData()
    console.log(userFrameworks[2],'see something')
    formData.append('companyName',compInfoObj.companyName)
    formData.append('phone',compInfoObj.phone)
    formData.append('email',compInfoObj.email)
    formData.append('framework1',userFrameworks[0])
    if(userFrameworks[1] !== undefined){  formData.append('framework2',userFrameworks[1])}
    if(userFrameworks[2] !== undefined){  formData.append('framework3',userFrameworks[2])}
    
    formData.append('skill1',userSkills[0].name)
    if(userSkills[1] !== undefined){  formData.append('skill2',userSkills[1].name)}
    if(userSkills[2] !== undefined){  formData.append('skill3',userSkills[2].name)}

    formData.append('salary_range',compInfoObj.fundingLevel)
    formData.append('stack',compInfoObj.stack)
    console.log(file,'see file')
    formData.append('jobDescription', file)
    formData.append('no_of_devs', e.target.noOfDevs.value)
    formData.append('jobLocation1', e.target.jobLocation.value)
    formData.append('workType','Contact')

    fetch(`${api_origin}/api/v1/comp/hireContact`, {
        method: 'POST',
        body: formData
      }).then(
        response => response.json()
      ).then((result)=>{
          if(result.status==true){
          handleClick("next")
          }else{toast.error(result.message)}
      })

 
  }
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={10000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <form onSubmit={submitHireDetails}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div>
            <p className="text-[#001935] font-bold">Choose Stack</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {state && state.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                    
                      <input id="orange-radio" type="radio" required value={items.id} name="colored-radio" class="w-4 h-4 hidden text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleSelectStack} />
                      <div className={styles.icon_box}>
                        {/* <div className={styles.fab}>
                          <img src={items.stackIcon} />
                        </div> */}
                        
                        <span className={styles.fa} aria-hidden="true"> {items.name} </span>
                      </div>
                    </label>
                  </li>
                )))}
              </ul>
            </div>
          </div>
{showFramework && (
  <div>
            <p className="text-[#001935] font-bold">Choose Framework</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {frameWork && frameWork.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                      <input type="checkbox" name="" className={styles.inputType} id={items.id} onChange={handleSelectFramework}  />
                      <div className={styles.icon_box}>
                        <span className={styles.fa} aria-hidden="true"> {items.name} </span>
                      </div>
                    </label>
                  </li>
                )))}
              </ul>
            </div>
          </div>
)}

          <div className="relative">
              <div className={styles.tags_input}>
                <ul className={styles.tags}>
                  {tags.map((tag, index) => (
                    <li key={index} className={styles.tag}>
                      <span className={styles.tag_title}>{tag.name}</span>
                      <span className={styles.tag_closes_icon} id ={index}
                        onClick={()=>{ removeTags(index,tag.id)}}
                      >
                        x
                      </span>
                    </li>
                  ))}
                </ul>
                <input
                  className={styles.textInput}
                  type="text"
                  onKeyDown={event => event.key === "Enter" ? addTags(event) : null}
                  // onKeyUpCapture={showKeys}
                  placeholder="Press enter to add skills"
                  onChange={handleGetSkills}
                />
              </div>

              <div class="absolute left-0 z-20 w-full max-h-52 overflow-y-auto py-1 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"> 
              {suggest
                .map((item) => (
                               
                               <p class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                               onClick={() => handleSelectSkill(item.name,item.id)}
                               key={item.id}>
                                   {item.name}
                               </p>
                           
                           ))
             
              }
              </div>
          </div>

          <div>
                <input 
                  type="number" 
                  placeholder="How many developers do you need"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                  name="noOfDevs"
                  required
                />
          </div>
          <p className="font-bold text-[#001935]">Have Location Prefrence?</p>
          <div className="flex gap-x-2">
            <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={(e) => {setDisplay(false)}} />
                <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
            <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={showClick} />
                <label for="bordered-radio-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
          </div>

          {display &&
          <div>
              <select 
                className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
                name="jobLocation"
              >
                <option disabled selected hidden>Select Continent</option>
                <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Oceania/Australia">Australia/Oceania</option>
                  <option value="Antarctica">Antarctica</option>
              </select>
          </div>
          }
          {showPrice && (
            <div>
            <p className="text-[#001935] font-bold">Choose Price</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {price && price.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                     
                      <input id="orange-radio" type="radio" value={`$${items.lower_price} - $${items.higher_price}`} name="colored-radio" class="w-4 h-4 hidden text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={handleSelectPrice} required/>
                   
                      <div className={styles.icon_box}>
                        <div className={styles.fab}>
                          {items.stackIcon}
                        </div>
                        
                        <span className={styles.fa} aria-hidden="true"> {`$${items.lower_price} - $${items.higher_price}`} </span>
                      </div>
                    </label>
                  </li>
                )))}
              </ul>
            </div>
          </div>
          )}
          <div className="">
            <label className="block text-base font-base text-gray-700">File</label>
          
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                >
                    <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                <div className="flex text-sm text-gray-600">
                    <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-[#f49038] hover:text-[#f49038] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#f49038]"
                    >
                    <span>Upload Job Description</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleJDChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">.doc, .pnt less than 10MB</p>
                </div>
            </div>
          
            <div>
                    <p className="font-bold text-center">
                       <span >{fileName}</span>  
                    </p>
                </div>
          
          </div>

          <div className="container mx-auto mt-4 mb-8">
            <div className="flex justify-between mx-auto">
                
                {/* Back button */}
                <button 
                onClick={()=>handleClick("")}
                className={`bg-[#001935] inline-flex items-center justify-center uppercase text-center text-white w-fit py-2 px-5 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 
                ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "" }`}>
                    Previous
                </button>

                {/* Next button */}
                <button 
                type="submit"
                className="bg-[#001935] inline-flex items-center justify-center uppercase text-center text-white w-fit py-2 px-5 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 
                ease-in-out">
                    {currentStep === steps.length - 1 ? "Confirm" : "Next"}
                </button>

            </div>
          </div>

        </div>
      </div>
      </form>
    </>
  )
}

export default DevChoice;