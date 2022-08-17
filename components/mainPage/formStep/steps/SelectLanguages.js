import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands, faHtml5 } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"
import styles from "../../../../styles/check.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
const initLanguagesArray=[]

function SelectLanguages({handleClick, steps, currentStep}) {
  const [userLanguagess,setUserLanguagess] = useState([])
  const [selectedLanguagess,setSelectedLanguagess] = useState([])
  const[show, setShow] = useState(true)
  
  useEffect(() =>{

    async function fetchData() {
    if (typeof window !== "undefined"){
      var userToken = JSON.parse(localStorage.getItem("userToken"))
      var userStack = JSON.parse(localStorage.getItem("userStack"))
    }
   
    
    const res = await simpleHttp.get(`/api/v1/dev/getLanguagesBasedOnStacks/${userStack}`,userToken)

    if(res.status == true){setUserLanguagess(res.data)}else{toast.error(res.error.message)}
    
    }
    fetchData();
}, [])

const handleSelectLanguages = async(e)=>{
  const singleId = e.target.id
  //max number is 6
  function checkIfClicked(single) {return single == singleId}
  const checked = initLanguagesArray.find(checkIfClicked)
  if (checked !== undefined) { // has been checked before, remove id from state
  var selectedLanguagess = JSON.parse(localStorage.getItem("userLanguagess"))
  let updatedLanguagess = selectedLanguagess.filter((id) => 
  {return id !== parseInt(singleId)})
  window.localStorage.setItem('userLanguagess', JSON.stringify(updatedLanguagess))

  //unchooseFramwork
  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/UnchooseMyLanguages/${singleId}`,userToken)
  if(res.status == true){}else{toast.error(res.error.message)}
  }else{
    initLanguagesArray.push(parseInt(singleId))
    localStorage.setItem('userLanguagess', JSON.stringify(initLanguagesArray))
    console.log(initLanguagesArray,'initLanguagesArray')
    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/chooseMyLanguages/${singleId}`,userToken)
    if(res.status === true ){
      console.log('Languages selected')
      }else{toast.error(res.message)}
  }
  

}




  const showSelect = (e)=> {
    e.preventDefault()
    setShow(!show)
  }

const handleSubmitLanguagess = async(e)=>{
  e.preventDefault()
  var userLanguagess = JSON.parse(localStorage.getItem("userLanguagess"))

  if(userLanguagess == null){
   return toast.error('You did not select any Languages')
  }
  handleClick("next")
}

const handleSelectLanguagesExp = async(e)=>{
  e.preventDefault()
  const LanguagesId = e.target.experience.value
  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/enterMyLanguagesExperience`,userToken,LanguagesId)
  if(res.status === true ){
    }else{toast.error(res.message)}

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
      <form onSubmit={handleSubmitLanguagess}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Choose Languages You Work With</span>
          </div>

          <div className={styles.main_container}>

            <ul className={styles.main_list}>
              {userLanguagess.map((single => (
                <li className={styles.single_list} key={single.id}>
                  <label className={styles.list_label}>
                    <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={handleSelectLanguages} />
                    <div className={styles.icon_box}>

                    
                      <span onClick={showSelect} className={`${show ? "block" : "hidden"} ml-2`}> + </span>
                      
                      <div className={`${show ? "hidden" : "block"}`}>
                        <select onChange={handleSelectLanguagesExp} id={single.id} name="experience">
                          <option value = '1'>1 year</option>
                          <option value = '2'>2 years</option>
                          <option value = '3'>3 years</option>
                          <option value = '4'>4 years</option>
                          <option value = '5'>5 years</option>
                          <option value = '6'>6 years</option>
                          <option value = '7'>7 years</option>
                        </select>
                      </div>
                      <span className={styles.fa} aria-hidden="true"> {single.name} </span>
                    </div>
                  </label>
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

export default SelectLanguages