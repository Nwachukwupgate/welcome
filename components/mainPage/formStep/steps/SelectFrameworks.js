import React, {useState,useEffect} from 'react';
import styles from "../../../../styles/check.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
const initLanguageArray=[]

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
  const [userFrameworks,setUserFrameworks] = useState([])
  
  useEffect(() =>{
    async function fetchData() {
      if (typeof window !== "undefined"){
        var userToken = JSON.parse(localStorage.getItem("userToken"))
        var userLanguagess = JSON.parse(localStorage.getItem("userLanguagess"))
     }
      const res = await simpleHttp.get(`/api/v1/dev/getFrameworksBasedOnLanguages/${userLanguagess[0]}/${userLanguagess[1]}/${userLanguagess[2]}/${userLanguagess[3]}/${userLanguagess[4]}/${userLanguagess[5]}`,userToken)
      console.log(res,'fensRes')
      if(res.status == true){setUserFrameworks(res.data)}else{toast.error(res.error.message)}
 
    }
    fetchData();
}, [])

console.log(userFrameworks,'userFrameworks')



const handleSelectLanguage = async(e)=>{
  const singleId = e.target.id
  //max number is 8
  //unselect and check that user has selceted at least one framework

  function checkIfClicked(single) {return single == singleId}
  const checked = initLanguageArray.find(checkIfClicked)
  console.log(checked, 'Has been clicked?')
  if (checked !== undefined) { // has been checked before, remove id from state
  //unselect language & remove from localstorage
 
  var selectedFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
 
  let updatedFrameworks = selectedFrameworks.filter((id) => 
  {return id !== parseInt(singleId)
  })

  window.localStorage.setItem('userFrameworks', JSON.stringify(updatedFrameworks))
  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/UnchooseMyFrameworks/${singleId}`,userToken)
  if(res.status == true){}else{toast.error(res.error.message)}
  }else{
    initLanguageArray.push(parseInt(singleId))
    localStorage.setItem('userFrameworks', JSON.stringify(initLanguageArray))
    console.log(initLanguageArray,'initLanguageArray')
    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/chooseMyFrameworks/${singleId}`,userToken)
    if(res.status === true ){
      console.log('language selected')
      }else{toast.error(res.message)}
  }
  

}


const handleSubmitFrameworks = async(e)=>{
  e.preventDefault()
  var userFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))

  if(userFrameworks == null){
   return toast.error('You did not select any language')
  }
  handleClick("next")
}

  return (
    <>
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
                    <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={handleSelectLanguage} />
                    <div className={styles.icon_box}>
                
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
            type="submit"
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

export default SelectLanguage