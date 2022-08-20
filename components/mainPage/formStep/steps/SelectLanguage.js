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

  const[exp, setExp] = useState("")
  const[show, setShow] = useState({})
  const[value, setValue] = useState([])
  const[mainValue, setMainValue]  = useState([value])

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

  

  

  const handleExp = (e) => {
    e.preventDefault()
    setExp(e.target.value)
  }

  

  


  //api/v1/dev/getLanguagesBasedOnFrameworks/1/2/3/4/5
  // max number of language 8
  const [userLanguages,setUserLanguages] = useState([])
  
  useEffect(() =>{
    async function fetchData() {
      if (typeof window !== "undefined"){
        var userToken = JSON.parse(localStorage.getItem("userToken"))
        var userFrameworks = JSON.parse(localStorage.getItem("userFrameworks"))
     }
      const res = await simpleHttp.get(`/api/v1/dev/getLanguagesBasedOnFrameworks/${userFrameworks[0]}/${userFrameworks[1]}/${userFrameworks[2]}/${userFrameworks[3]}/${userFrameworks[4]}/${userFrameworks[5]}`,userToken)
      console.log(res,'fensRes')
      if(res.status == true){setUserLanguages(res.data)}else{toast.error(res.error.message)}
 
    }
    fetchData();
}, [])

console.log(userLanguages,'userLanguages')



const handleSelectLanguage = async(e)=>{
  const singleId = e.target.id
  //max number is 8
  //unselect and check that user has selceted at least one framework

  function checkIfClicked(single) {return single == singleId}
  const checked = initLanguageArray.find(checkIfClicked)
  console.log(checked, 'Has been clicked?')
  if (checked !== undefined) { // has been checked before, remove id from state
  //unselect language & remove from localstorage
 
  var selectedLanguages = JSON.parse(localStorage.getItem("userLanguages"))
  console.log('selectedLanguages',selectedLanguages,singleId)
  let updatedLanguages = selectedLanguages.filter((id) => 
  {
    console.log(id,typeof(id),'id')
    console.log(singleId,typeof(parseInt(singleId)),'singleId')
    return id !== parseInt(singleId)
  })

  window.localStorage.setItem('userLanguages', JSON.stringify(updatedLanguages))
  }else{
    initLanguageArray.push(parseInt(singleId))
    localStorage.setItem('userLanguages', JSON.stringify(initLanguageArray))
    console.log(initLanguageArray,'initLanguageArray')
    var userToken = JSON.parse(localStorage.getItem("userToken"))
    const res = await simpleHttp.put(`/api/v1/dev/chooseMyLanguages/${singleId}`,userToken)
    if(res.status === true ){
      console.log('language selected')
      }else{toast.error(res.message)}
  }
  

}


const handleSubmitLanguages = async(e)=>{
  e.preventDefault()
  var userLanguages = JSON.parse(localStorage.getItem("userLanguages"))

  if(userLanguages == null){
   return toast.error('You did not select any language')
  }
  handleClick("next")
}

  return (
    <>
    <form onSubmit={handleSubmitLanguages}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Choose Your Language</span>
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