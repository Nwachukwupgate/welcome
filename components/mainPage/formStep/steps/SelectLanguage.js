import React, {useState,useEffect} from 'react';
import styles from "../../../../styles/check.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()

function SelectLanguage({handleClick, steps, currentStep}) {
  const[state, setState] = useState([
    {
      id: 1,
      stack: 'Html',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
    },

    {
      id: 2,
      stack: 'JavaScript',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/5968/5968351.png",
    },

    {
      id: 3,
      stack: 'php',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
    },

    {
      id: 4,
      stack: 'Python',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/919/919852.png",
    },

    {
      id: 5,
      stack: 'Scala',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/919/919834.png",
    },

    {
      id: 6,
      stack: 'Mongo db',
      stackIcon:"https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png",
    },
  ])

  const[show, setShow] = useState(true)

  const showSelect = (e)=> {
    e.preventDefault()
    setShow(!show)
  }


  //api/v1/dev/getLanguagesBasedOnFrameworks/1/2/3/4/5
  // max number of language 8
  const [userLanguages,setUserLanguages] = useState([])
  
  useEffect(() =>{
    
    async function fetchData() {
      if (typeof window !== "undefined"){
        var userToken = JSON.parse(localStorage.getItem("userToken"))
     }
    console.log(userToken,'userToken')
    const res = await simpleHttp.get(`/api/v1/dev/getLanguagesBasedOnFrameworks/${1}`,userToken)
    if(res.status == true){setUserLanguages(res.data)}else{toast.error(res.error.message)}
   
    }
    fetchData();
}, [])

console.log(userLanguages,'userLanguages')

  return (
    <>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Choose Your Language</span>
          </div>

          <div className={styles.main_container}>

            <ul className={styles.main_list}>
              {userLanguages.map((single => (
                <li className={styles.single_list} key={single.id}>
                  <label className={styles.list_label}>
                    <input type="checkbox" name="" className={styles.inputType} />
                    <div className={styles.icon_box}>
                      {/* <div className={styles.fab}>
                        <img src={single.stackIcon} />
                      </div> */}
                      
                      <span className={styles.fa} aria-hidden="true"> {items.stack} </span>
                      <span onClick={showSelect} className={`${show ? "block" : "hidden"} ml-2`}> + </span>
                      
                      <div className={`${show ? "hidden" : "block"}`}>
                        <select>
                          <option>2 years</option>
                          <option>3 years</option>
                          <option>4 years</option>
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
            onClick={() => handleClick("next")}
            className="bg-white w-full text-slate-400 uppercase py-2 px-32 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 ease-in-out inline-flex
            items-center
            justify-center">
                {currentStep === steps.length - 1 ? "Confirm" : "Next"}
            </button>
            
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default SelectLanguage