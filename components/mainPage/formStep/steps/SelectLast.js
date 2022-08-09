import React,{useState,useRef} from 'react'
import styles from "../../../../styles/check.module.css"
import EasyHTTP from '../../../../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
const simpleHttp =  new EasyHTTP()



if(process.env.NEXT_PUBLIC_NODE_ENV ==='development'){
  console.log('here')
  var api_origin = 'http://localhost:3333'
}else{
  var api_origin = 'https://api.droomwork.io'
}
let file = null
let cvFile = null

function SelectLast({handleClick, steps, currentStep}) {
  const router = useRouter()
  const imgref = useRef('')
  const [tags, setTags] = React.useState([]);
  const [fileName, setFileName] = useState('')
  const [profileName, setProfileName] = useState('')
  const [files, setFile] = useState(null);
  const [spinner, setSpinner] = useState(false)
  const [uploadState,setuploadState]  = useState(true)
  
  const hiddenFileInput = React.useRef(null);


//   const handleUploadPhoto = (e)=>{
//     e.preventDefault()
//     // filePayload = e.target.files;
//     file = e.target.files[0]
//     const fileType = file['type'];
//     const validImageTypes = ['image/jpg', 'image/jpeg', 'image/png']
//     if (e.target.files.length > 0) {
//         if (!validImageTypes.includes(fileType)) {
//             return toast.error('An Image file needed')
//         }
        
//        imgref.current.src = URL.createObjectURL(file)
//        setuploadState(false)
//     }

//     return file
   
// }


const handleSubmitDevsRegistration = async(e)=>{
 e.preventDefault()
 const firstName = e.target.firstName.value
 const lastName = e.target.lastName.value
 const phone = e.target.phoneNumber.value
 //skills

 const data = {
    phone,lastName,firstName
  }
 const res = await simpleHttp.put('/api/v1/dev/updateDevProfile',data)
 if(res.status == true){
 router.push('/')
  }
  toast.error(res.hint)
}
const handleChange=(e)=>{
  setFile(e.target.files[0])
  setFileName(e.target.files[0].name)
  file = e.target.files[0]
  hiddenFileInput.current.click()
  
  var ext = file.name.split('.').pop()
  if(ext=="png" || ext=="jpeg" || ext=="jpg"){
  if(file.size >1000000){return toast.error('picture size is too large')}
  setuploadState(false)  
  }else{return toast.error('Kindly upload your picture')}

  return file
}

const handleCVChange =(e)=>{
  setFile(e.target.files[0])
  setFileName(e.target.files[0].name)
  cvFile = e.target.files[0]
  hiddenFileInput.current.click()
  
  var ext = file.name.split('.').pop()
  if(ext=="docx" || ext=="doc" || ext=="pdf"){
  if(file.size >1000000){return toast.error('CV size is too large')}
  setuploadState(false)  
  }else{return toast.error('Kindly upload your CV')}

  return file
}

   

  const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};

  const addTags = event => {
		if (event.target.value !== "") {
    // if (event.key === "Enter" && event.target.value !== "") {
			setTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};



  return (
    <>
    <form onSubmit={handleSubmitDevsRegistration}>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Personal Details</span>
          </div>
          
          <div className="space-y-8">

            <div>
                <label class="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload Picture</label>
                <input 
                  type="file" 
                  placeholder='Select profile pics'
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none" id="myFile"
                  ref={hiddenFileInput} onChange={handleChange} 
                />
                  {/* <button className={styles.file_upload__button} type="button" onClick={handleClick}>Choose File(s)</button> */}
                <div>
                  {profileName}
                </div>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 1mb).</p>
            </div>

            <div>
                <input 
                  type="text" 
                  placeholder="First Name"
                  name="firstName"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
                <input 
                  type="text" 
                  placeholder="Last Name"
                  name="lastName"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div className="">
              <div className={styles.tags_input}>
                <ul className={styles.tags}>
                  {tags.map((tag, index) => (
                    <li key={index} className={styles.tag}>
                      <span className={styles.tag_title}>{tag}</span>
                      <span className={styles.tag_closes_icon}
                        onClick={() => removeTags(index)}
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
                  placeholder="Press enter to add skills"
                />
              </div>
            </div>

            <div>
                <input 
                  type="number" 
                  placeholder="Phone Number"
                  name="phoneNumber"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            {/* <div>
                <select 
                  placeholder="Country"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
                >
                  <option disabled selected hidden>Country</option>
                  <option>Togo</option>
                  <option>India</option>
                  <option>Mali</option>
                  <option>China</option>
                  <option>Nigeria</option>
                </select>
            </div> */}

            <div className="">
                <textarea
                    class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Write a short description about yourself"
                    name="shortBio"
                ></textarea>
            </div>

            <div className="">
            <label className="block text-base font-base text-gray-700">File</label>

            {fileName === "" ? 
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                        htmlFor="cvFile"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-[#f49038] hover:text-[#f49038] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#f49038]"
                        >
                        <span>Upload CV</span>
                        <input id="cvFile" name="cvFile" type="file" onChange={(e) => handleChange(e)} className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">.doc, .pnt less than 1MB</p>
                    </div>
                </div>
            : 
                <div>
                    <p>
                        <span>Attached file</span> <span className="font-bold">{fileName}</span>  <span className="text-red-600 cursor-pointer" onClick={cancelFile}>X</span>
                    </p>
                </div>
            }
            </div>

            </div>
            </div>

                   
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
      </form>
    </>
  )
}

export default SelectLast