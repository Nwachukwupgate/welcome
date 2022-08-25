import React, {useState,useEffect} from 'react';
import styles from "../../../../styles/check.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EasyHTTP from '../../../../helpers/easyHttp'
const simpleHttp =  new EasyHTTP()
const initFrameworkArray=[]

function SelectLanguage({handleClick, steps, currentStep}) {


  const[exp, setExp] = useState("")
  const[show, setShow] = useState({})
  const[value, setValue] = useState()
  const[mainValue, setMainValue]  = useState([])
  const [saveAction, setSaveAction] = useState({})


  const showSelect = (index) => (e) => {
    setShow(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));

    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));
  };

  const saveShow = (index, value) => (e) => {
    e.preventDefault()
    console.log("clicked hereeee", typeof(value))
    console.log("clicked hereeee", typeof(mainValue))
    // Object.keys(mainValue).forEach(key => {
    //   if (key in value) {
    //     mainValue[key] = value[key];
    //   }
    // });
    setMainValue(current =>
      [...current, value]
    )
    
    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key

    }));
  };

  const cancelShow = (index) => (e) => {
    e.preventDefault()
    setShow(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));
    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));
  };

  const emptyFields = (index, value) => (e) => {
    e.preventDefault()
    
    setShow(state => ({
      ...state, // <-- copy previous state
      [index]: state[index] // <-- update value by index key
    }));
    setSaveAction(state => ({
      ...state, // <-- copy previous state
      [index]: !state[index] // <-- update value by index key
    }));

    const newObjs = mainValue.filter(item => item.id !== index)
    setMainValue(newObjs)

    // setMainValue(mainValue.fiter(item => item.id !== index))
    // const newObjs = Object.values(mainValue).filter(product => product !== value)
    // const newObjs = Object.values(mainValue)
    // console.log("this is the filtered abeg work", newObjs)
    // setMainValue(newObjs)


    const newObj = Object.values(mainValue);
    
  }


  

  const handleExp = (e) => {
    e.preventDefault()
    setExp(e.target.value)
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
   
      if(res.status == true){setUserFrameworks(res.data)}else{toast.error(res.error.message)}
 
    }
    fetchData();
}, [])





const handleSelectLanguage = async(e)=>{
  const singleId = e.target.id
  //max number is 8
  //unselect and check that user has selceted at least one framework

  function checkIfClicked(single) {return single == singleId}
  const checked = initFrameworkArray.find(checkIfClicked)
 
  if (checked !== undefined) { // has been checked before, remove id from state
  //unselect language & remove from localstorage
 
  var selectedFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
 
  let updatedFrameworks = selectedFrameworks.filter((id) => 
  {return id !== parseInt(singleId)
  })

  window.localStorage.setItem('userFrameworks', JSON.stringify(updatedFrameworks))
  initFrameworkArray.length = 0 //clears array
  updatedFrameworks.map((single)=>{
   return initFrameworkArray.push(single)
  })

  var userToken = JSON.parse(localStorage.getItem("userToken"))
  const res = await simpleHttp.put(`/api/v1/dev/UnchooseMyFramework/${singleId}`,userToken)
  if(res.status == true){}else{toast.error(res.error.message)}
  }else{
    initFrameworkArray.push(parseInt(singleId))
    localStorage.setItem('userFrameworks', JSON.stringify(initFrameworkArray))
 
    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/chooseMyFramework/${singleId}`,userToken)
    if(res.status === true ){
    
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

        
                {/* <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={showSelect(single.id)} checked={show[single.id]} /> */}

                  <div className={`${show[single.id] ? styles.checked_butt : styles.icon_box}`} onClick={showSelect(single.id)}> 

                  {/* <input type="checkbox" name="" className={styles.inputType} id={single.id} onChange={handleSelectLanguages} /> */}
                  {/* <div className={styles.icon_box}> */}

                    <span onClick={showSelect(single.id)} className={`${show[single.id] ? "hidden" : "block"} ml-2`}> + </span>

                    <span className={styles.fa} aria-hidden="true"> {single.name} </span>

                    <span onClick={emptyFields(single.id, value)} className={`${show[single.id] ? "block" : "hidden"} ml-4`}> x </span>
                  </div>
                </label>

                <div className={`${saveAction[single.id] ? "block" : "hidden"} absolute z-10`}>
                
                  <div className='flex gap-y-4 min-w-[20rem] bg-white z-10 shadow-2xl flex-col p-2'>
                    <p>Years of professional experience</p>

                    <select onChange={(e)=> {setValue(
                       { id: single.id, value: e.target.value } 
                      )
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
                      <button className="inline-flex w-full lg:w-fit justify-center px-2 py-1 font-semibold bg-white text-[#001935] border-2 border-solid border-[#001935] hover:text-gray-100 transition-colors duration-200 transform hover:bg-[#001935] rounded-md " onClick={cancelShow(single.id)}>cancel</button>
                      <button className="inline-flex w-full lg:w-fit justify-center px-2 py-1 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] border-2 border-solid border-[#001935]" onClick={saveShow(single.id, value)}>save</button>    
                    </div>
                  </div>
                
                z

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