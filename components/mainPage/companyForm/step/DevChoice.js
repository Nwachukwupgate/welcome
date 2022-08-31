import React, {useState,useEffect}  from 'react'
import styles from "../../../../styles/compCheck.module.css"
import EasyHTTP from '../../../../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const simpleHttp =  new EasyHTTP()

if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){var api_origin = 'http://localhost:3333'}else{var api_origin = 'https://api.droomwork.io'}


const initLanguageArray=[]
const initFrameworkArray=[]
let file = null

function DevChoice({handleClick, steps, currentStep}) {
  const [tags, setTags] = React.useState([])
  const[display, setDisplay] = useState(false)
  const[state, setState] = useState([])
  const[showLanguage, setShowLanguage] = useState(false)
  const[showPrice, setShowPrice] = useState(false)
  const[showFramework, setShowFramework] = useState(false)
  const[Language, setLanguage] = useState([])
  const[Framework, setFramework] = useState([])
  const[level, setLevel] = useState('')
  const[price, setPrice] = useState([])
  const[suggest, setSuggest] = useState([])
  const[value, setValue] = useState("")
  const [fileName, setFileName] = useState('')
  const [selectedPrice,setSelectedPrice] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [location,setLocation] = useState('')
  const [isLanguageSelected,setIsLanguageSelected] = useState(false)
  const [isSkillSelected,setIssKillSelected] = useState(false)
  const [isPriceSelected,setIsPriceSelected] = useState(false)
  const [isFrameworkSelected,setIsFrameworkSelected] = useState(false)
  const [updatedLanguageArray,setUpdatedLanguageArray] = useState([])
  
  //
  



  const submitHireDetails = async(e)=>{
    e.preventDefault()
    if(isPriceSelected == true){
      setSpinner(true)
      var formData = new FormData()
      var compInfoObj = JSON.parse(localStorage.getItem("compInfoObj"))
      var userLanguages = JSON.parse(localStorage.getItem("userLanguages"))
      var userFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
      var userSkills = JSON.parse(localStorage.getItem("userSkills"))
      var companyLocation = JSON.parse(localStorage.getItem("location"))
      formData.append('companyName',compInfoObj.companyName)
      formData.append('phone',compInfoObj.phone)
      formData.append('email',compInfoObj.email)
      
      if(isLanguageSelected == true){
      
        if(userLanguages[0] !== undefined){
          var langId1 =  Object.values(userLanguages[0])[0]
          formData.append('language1',langId1)
        }
        if(userLanguages[1] !== undefined){
          var langId2 = Object.values(userLanguages[1])[0]
          formData.append('language2',langId2)}
        if(userLanguages[2] !== undefined){
          var langId3 = Object.values(userLanguages[2])[0]
          formData.append('language3',langId3)}
      }

      if(isFrameworkSelected == true){
        if(userFrameworks[0] !== undefined){
          var frameId1 =  Object.values(userFrameworks[0])[0]
          formData.append('framework1',frameId1)
        }
        if(userFrameworks[1] !== undefined){
          var frameId2 =  Object.values(userFrameworks[1])[0]
          formData.append('framework2',frameId2)
        }
        if(userFrameworks[2] !== undefined){
          var frameId3 =  Object.values(userFrameworks[2])[0]
          formData.append('framework3',frameId3)}
      }
      
      if(isSkillSelected==true){
        if(userSkills[0] !== undefined){ formData.append('skill1',userSkills[0].name)}
        if(userSkills[1] !== undefined){ formData.append('skill2',userSkills[1].name)}
        if(userSkills[2] !== undefined){ formData.append('skill3',userSkills[2].name)}
      }
      
  
      formData.append('salary_range',selectedPrice)
      formData.append('stack',compInfoObj.stack)
      formData.append('jobDescription', file)
      formData.append('no_of_devs', e.target.noOfDevs.value)
      formData.append('jobLocation1',location)
      formData.append('workType','Contact')
      formData.append('level',level)
      formData.append('companyLocation',companyLocation)
  
      fetch(`${api_origin}/api/v1/comp/hireContact`, {
          method: 'POST',
          body: formData
        }).then(
          response => response.json()
        ).then((result)=>{
            if(result.status==true){
            handleClick("next")
            localStorage.removeItem("compInfoObj")
            localStorage.removeItem("userLanguages")
            localStorage.removeItem("userSkills")
            localStorage.removeItem("userFrameworks")
            }else{
              toast.error(result.message)
              setSpinner(false)
            }
        })
  
    }else{toast.error('Select Price')}
  
  }


  const handleJDChange = (e) => {
      setFileName(e.target.files[0].name)
      file = e.target.files[0]
      
      // hiddenFileInput.current.click()
      var ext = file.name.split('.').pop()
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
    setIssKillSelected(true)
    setValue(searchedSkill)
    const numberOfSkill = tags.length
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

  const removeTags = (indexToRemove,tId) => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)])
    const skills = JSON.parse(localStorage.getItem("userSkills"))
    const updatedSkills =  skills.filter((single) => {return single.id !== tId})
    localStorage.setItem('userSkills', JSON.stringify(updatedSkills))
	}

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
  const stackName = e.target.id
  const res = await simpleHttp.get(`/api/v1/comp/getLanguagesBasedOnStacks/${stackId}`)
  if(res.status == true){   
    setLanguage(res.data)
    setShowLanguage(true)
  }else{toast.error(res.error.message)}

  const location = JSON.parse(localStorage.getItem("location"))
  const ress = await simpleHttp.get(`/api/v1/all/getPrice/${location}/${stackId}`)
  if(ress.status == true){
    // console.log(ress.data,'price')
    setPrice(ress.data)
    setShowPrice(true)
  }else{toast.error(ress.error.message)}
  setShowLanguage(true)
  const availableCompInfoObj = JSON.parse(localStorage.getItem("compInfoObj"))
  const updatedCompInfoObj = Object.assign(availableCompInfoObj,{'stack':stackName})
  localStorage.setItem('compInfoObj', JSON.stringify(updatedCompInfoObj))
}

const handleSelectPrice = async(e)=>{
  setIsPriceSelected(true)
  const priceRange = e.target.getAttribute('data-id')
  const seniority = e.target.id
  if(seniority =='junior'){setLevel('Junior')}
  if(seniority =='mid'){setLevel('Mid-Level')}
  if(seniority =='senior'){setLevel('Senior')}
  const availableCompInfoObj = JSON.parse(localStorage.getItem("compInfoObj"))
  const updatedCompInfoObj = Object.assign(availableCompInfoObj,{'salary_range':priceRange})
  localStorage.setItem('compInfoObj', JSON.stringify(updatedCompInfoObj))
   setSelectedPrice(priceRange)
}
const handleSelectLanguage = async(e)=>{
  setIsLanguageSelected(true)
  const singleId = e.target.id
  const LanguageName = e.target.value
  //max number is 3
  function checkIfClicked(single) {
    return Object.values(single)[0] == LanguageName
  }
  const checked = initLanguageArray.find(checkIfClicked)
  if (checked !== undefined) { // has been checked before, remove id from stat
  var selectedLanguages = JSON.parse(localStorage.getItem("userLanguages"))
  let updatedLanguages = selectedLanguages.filter((id) => {
  return Object.values(id)[0] !== LanguageName})

  localStorage.setItem('userLanguages', JSON.stringify(updatedLanguages))
 
  initLanguageArray.length = 0 //clears array
  

  updatedLanguages.map((single)=>{
   return initLanguageArray.push(single)
  })


  }else{
    // initLanguageArray.push(parseInt(singleId))

    var key =parseInt(singleId),
    obj = {[key]:LanguageName}
    initLanguageArray.push(obj)
    localStorage.setItem('userLanguages', JSON.stringify(initLanguageArray))
    var userLanguagess = JSON.parse(localStorage.getItem("userLanguages"))
    for ( var key in userLanguagess[0] ) {var langId1 = key}
    for ( var key in userLanguagess[1] ) {var langId2 = key}
    for ( var key in userLanguagess[2] ) {var langId3 = key}
    for ( var key in userLanguagess[3] ) {var langId4 = key}
    for ( var key in userLanguagess[4] ) {var langId5 = key}
    for ( var key in userLanguagess[5] ) {var langId6 = key}
    for ( var key in userLanguagess[6] ) {var langId7 = key}
    for ( var key in userLanguagess[7] ) {var langId8 = key}

    const res = await simpleHttp.getNoAuth(`/api/v1/comp/getFrameworksBasedOnLanguages/${langId1}/${langId2}/${langId3}/${langId4}/${langId5}/${langId6}/${langId7}/${langId8}`)

    if(res.status == true){  
      setFramework(res.data)
      setShowFramework(true)
    }else{toast.error(res.message)}
  }
  
}


const handleSelectFramework = async(e)=>{
setIsFrameworkSelected(true)
  const singleId = e.target.id
  const FrameworkName = e.target.value
  //max number is 3
  function checkIfClicked(single) {return Object.values(single)[0] == FrameworkName}
  const checked = initFrameworkArray.find(checkIfClicked)
  if (checked !== undefined) { // has been checked before, remove id from stat
  var selectedFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
  let updatedFrameworks = selectedFrameworks.filter((id) => 
  {return Object.values(id)[0] !== FrameworkName})
  localStorage.setItem('userFrameworks', JSON.stringify(updatedFrameworks))

  console.log(initFrameworkArray,'b4 updated',updatedFrameworks,'updatedLanguages')
  initFrameworkArray.length = 0 //clears array
  

  updatedFrameworks.map((single)=>{
   return initFrameworkArray.push(single)
  })
 

  }else{
    var key =parseInt(singleId),
    obj = {[key]:FrameworkName}
    initFrameworkArray.push(obj)
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
                    
                      <input id={items.name} type="radio" required value={items.id} name="colored-radio" class="w-4 h-4 hidden text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleSelectStack} />
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
{showLanguage && (
  <div>
            <p className="text-[#001935] font-bold">Choose Language</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {Language && Language.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                      <input type="checkbox" name="" className={styles.inputType} id={items.id} value={items.name} onChange={handleSelectLanguage}  />
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

{showFramework && (
  <div>
            <p className="text-[#001935] font-bold">Choose Frameworks</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {Framework && Framework.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                      <input type="checkbox" name="" className={styles.inputType} id={items.id} value={items.name} onChange={handleSelectFramework}  />
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
            <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={(e) => {setDisplay(false)}} />
                <label htmlFor="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
            <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={showClick} />
                <label htmlFor="bordered-radio-2" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
          </div>

          {display &&
          <div>
              <select 
                className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
                name="jobLocation"
                onChange={(e)=> setLocation(e.target.value)}
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
                      <input  id={items.seniority} type="radio" data-id={`$${items.lower_price} - $${items.higher_price}`} name="colored-radio" className='hidden'  onChange={handleSelectPrice} required  />
                      <div className={styles.icon_box}>
                        <span className={styles.fa} aria-hidden="true" required> {`$${items.lower_price} - $${items.higher_price}`} </span>
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
                <p className="text-xs text-gray-500">.pdf only less than 10MB</p>
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
                className={`bg-[#001935] inline-flex items-center justify-center  text-center text-white w-fit py-2 px-5 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 
                ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "" }`}>
                    Previous
                </button>

                {/* Next button */}
                <button 
                type="submit"
                className="bg-[#001935] inline-flex items-center justify-center  text-center text-white w-fit py-2 px-5 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 
                ease-in-out">
                {spinner && <svg class="inline  w-6 h-6 text-white animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>}
                {!spinner && currentStep === steps.length - 1 ? "Submit"
    :" submitting.."}
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