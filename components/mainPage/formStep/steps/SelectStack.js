import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands, faHtml5 } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"
import styles from "../../../../styles/check.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
const initFrameworkArray=[]

function SelectStack({handleClick, steps, currentStep}) {
  const [userFrameworks,setUserFrameworks] = useState([])
  const [selectedFrameworks,setSelectedFrameworks] = useState([])
  const[show, setShow] = useState({})
  const[value, setValue] = useState([])
  const[mainValue, setMainValue]  = useState([value])
  
  useEffect(() =>{

    async function fetchData() {
    if (typeof window !== "undefined"){
      var userToken = JSON.parse(localStorage.getItem("userToken"))
      var userStack = JSON.parse(localStorage.getItem("userStack"))
    }
   
    console.log(userStack,'userStack')
    const res = await simpleHttp.get(`/api/v1/dev/getFrameworksBasedOnStacks/${userStack}`,userToken)

    if(res.status == true){setUserFrameworks(res.data)}else{toast.error(res.error.message)}
    
    }
    fetchData();
}, [])

console.log(userFrameworks,'userFrameworks')
const handleSelectFramework = async(e)=>{
  const singleId = e.target.id
  //max number is 6
  //unselect and check that user has selceted at least one framework

  function checkIfClicked(single) {return single == singleId}
  const checked = initFrameworkArray.find(checkIfClicked)
  console.log(checked, 'Has been clicked?')
  if (checked !== undefined) { // has been checked before, remove id from state
  //unselect framework & remove from localstorage
 
  var selectedFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
  console.log('selectedFrameworks',selectedFrameworks,singleId)
  let updatedFrameworks = selectedFrameworks.filter((id) => 
  {
    console.log(id,typeof(id),'id')
    console.log(singleId,typeof(parseInt(singleId)),'singleId')
    return id !== parseInt(singleId)
  })

  window.localStorage.setItem('userFrameworks', JSON.stringify(updatedFrameworks))


  }else{
    initFrameworkArray.push(parseInt(singleId))
    localStorage.setItem('userFrameworks', JSON.stringify(initFrameworkArray))
    console.log(initFrameworkArray,'initFrameworkArray')
    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/chooseMyFramework/${singleId}`,userToken)
    if(res.status === true ){
      console.log('framework selected')
      }else{toast.error(res.message)}
  }
  

}

  //   {
  //     id: 6,
  //     stack: 'tailwind',
  //     stackIcon:"https://raw.githubusercontent.com/github/explore/882462b8ecc337fd9c9b2572bc463a1cbc88fb6a/topics/tailwind/tailwind.png",
  //   },
  // ])



  // const showSelect = (e)=> {
  //   e.preventDefault()
  //   setShow(!show)
  // }

console.log("this is the type ofof value", typeof value);
 
  const showSelect = (index) => (e) => {
    if (e.target.checked) {
      console.log("yreasdffg")
      setShow(state => ({
        ...state, // <-- copy previous state
        [index]: !state[index] // <-- update value by index key
      }));
    }
  };

  const saveShow = (e) => {
    e.preventDefault()
    // const newArray = mainValue.filter(obj => obj.id !== value.id).concat(value)
    // setMainValue(newArray)
    Object.keys(mainValue).forEach(key => {
      console.log("this is the key key value", key)
      if (key in value) {
        mainValue[key] = value[key];
      }
    });
    setShow(!show);
  };

  const cancelShow = (e) => {
    e.preventDefault()
    // const newArray = mainValue.filter(obj => obj.id !== value.id).concat(value)
    // setMainValue(newArray)
    setShow(!show);
  };

  console.log("this is the main value here", mainValue)

  console.log("this is the value!!", value)
  

const handleSubmitFrameworks = async(e)=>{
  e.preventDefault()
  var userFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))

  if(userFrameworks == null){
   return toast.error('You did not select any framework')
  }
  handleClick("next")
}

const handleSelectFrameworkExp = async(e)=>{
  // e.preventDefault()
  const frameworkId = e.target.experience.value
  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/enterMyFrameworkExperience`,userToken,frameworkId)
  if(res.status === true ){
    console.log('framework experience entered')
    }else{toast.error(res.message)}

}

console.log("this is the value", value)


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
      <form onSubmit={handleSubmitFrameworks}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Choose The Frameworks You Know</span>
          </div>

          <div className={styles.main_container}>

            <ul className={styles.main_list}>
              {userFrameworks.map((single => (
                <li className={styles.single_list} key={single.id}>
                  <label className={styles.list_label}>
                    {/* <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={handleSelectFramework} /> */}
                    <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={showSelect(single.id)} />
                    {/* <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={(e) => showSelect(single.id)} />  */}

                    <div className={styles.icon_box} onClick={showSelect(single.id)}>
                    {/* <div className={styles.icon_box}> */}

                    
                      <span onClick={showSelect(single.id)} className={`${show[single.id] ? "hidden" : "block"} ml-2`}> + </span>
                      
                      {/* <div className={`${show[single.id] ? "block" : "hidden"}`}>
                        <select onChange={handleSelectFrameworkExp} id={single.id} name="experience">
                          <option value = '1'>1 year</option>
                          <option value = '2'>2 years</option>
                          <option value = '3'>3 years</option>
                          <option value = '4'>4 years</option>
                          <option value = '5'>5 years</option>
                          <option value = '6'>6 years</option>
                          <option value = '7'>7 years</option>
                        </select>
                      </div> */}
                      
                      <span className={styles.fa} aria-hidden="true"> {single.name} </span>
                    </div>
                  </label>

                  <div className={`${show[single.id] ? "block" : "hidden"} absolute`}>
                    <div className='flex gap-y-4 min-w-[20rem] bg-white z-10 shadow-2xl flex-col p-2'>
                      <p>Years of professional experience</p>

                      <select onChange={(e)=> {setValue(s => (
                        [...s, { [single.id]: e.target.value } ]
                        ))
                        }} id={single.id} name="experience">
                        <option value = '1'>1 year</option>
                        <option value = '2'>2 years</option>
                        <option value = '3'>3 years</option>
                        <option value = '4'>4 years</option>
                        <option value = '5'>5 years</option>
                        <option value = '6'>6 years</option>
                        <option value = '7'>7 years</option>
                      </select>

                      <div className='flex justify-around'>
                        <button className="inline-flex w-full lg:w-fit justify-center px-2 py-1 font-semibold bg-white text-[#001935] border-2 border-solid border-[#001935] hover:text-gray-100 transition-colors duration-200 transform hover:bg-[#001935] rounded-md " onClick={cancelShow}>cancel</button>
                        <button className="inline-flex w-full lg:w-fit justify-center px-2 py-1 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] border-2 border-solid border-[#001935]" onClick={saveShow}>save</button>
                        
                      </div>
                    </div>
                  </div>
                </li>
              )))}
            </ul>

          </div>

          

          <div className="container mt-4 mb-8">
            <div className="flex flex-col items-center gap-y-4 w-2/4 mx-auto">
            {/* Back button */}

            
            <button 
              onClick={()=>handleClick("")}
              className={`bg-[#001935] inline-flex items-center justify-center w-full uppercase text-center text-white py-2 px-32 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "" }`} style={{color: "gray"}}>
                Previous
            </button>
            

            {/*  Next button */}
            
            <button 
            type='submit'
            className="bg-white w-full text-slate-400 uppercase py-2 px-32 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out inline-flex
            items-center
            justify-center">
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

export default SelectStack