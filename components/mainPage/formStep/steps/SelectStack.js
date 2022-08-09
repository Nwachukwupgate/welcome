import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands, faHtml5 } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"
import styles from "../../../../styles/check.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()

function SelectStack({handleClick, steps, currentStep}) {
  const [userFrameworks,setUserFrameworks] = useState([])
  const [selectedFrameworks,setSelectedFrameworks] = useState([])
  
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
  //max number is 6
  //unselect and check that user has selceted at least one framework
  const singleId = e.target.id
  //store frameworks for checks if user has selected any.
  localStorage.setItem('userFrameworks', JSON.stringify(singleId))
  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/chooseMyFramework/${singleId}`,userToken)
  if(res.status === true ){
    console.log('framework selected')
    }else{toast.error(res.message)}

}

const handleSubmitFrameworks = async(e)=>{
  e.preventDefault()
  var userFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
  console.log(userFrameworks,'userFrameworkLocal')
  if(userFrameworks == null){
   return toast.error('You did not select any framework')
  }
  handleClick("next")
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
                    <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={handleSelectFramework} />
                    <div className={styles.icon_box}>
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

export default SelectStack