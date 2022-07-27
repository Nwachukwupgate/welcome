import React,{useState, useEffect} from "react";
import SectionTitle from "./title";
import { useCustomContactMutation } from "reactWrapper/redux/apiSlice";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function FormField() {

    const [ customContact, {data, isSuccess, isError, error, isLoading }] = useCustomContactMutation();

    const [individual_Name, setIndividual_Name] = useState('');
    const [company_Name, setCompany_Name] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');
    const [attachement, setAttachement] = useState('');
    const [fileName, setFileName] = useState('')


    const handleChange = (event) => {
        setAttachement(event.target.files[0]);
        setFileName(event.target.files[0].name)
    };

    const cancelFile = (e) => {
        e.preventDefault()
        setFileName('')
    }

    // const Submit = async (data: IAuthLoginForm) => {
    //     await register(data).unwrap().then((response) => {
    //       // Handle the response here
    //       console.log(response)
    //     }).catch((error) => {
    //       // Handle the error here
    //       console.log(error)})
    //    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formdata = new FormData();

        formdata.append("individual_name", individual_Name);
        formdata.append("company_name", company_Name);
        formdata.append("email", email);
        formdata.append("message", message);
        formdata.append("country", country);
        formdata.append("website", website);
        formdata.append("attachement", attachement);

        // if(email && company_Name) {
        //     await customContact(formdata)
        //     setIndividual_Name('')
        //     setCompany_Name()
        //     setEmail('')
        //     setCountry('')
        //     setWebsite('')
        //     setMessage('')
        //     setAttachement('')
        // }else{
        //     toast.error("Please fill out email and company name")
        // }
        console.log("this is the form data", ...formdata)
        try{
            await customContact(formdata)
            setIndividual_Name('')
            setCompany_Name()
            setEmail('')
            setCountry('')
            setWebsite('')
            setMessage('')
            setFileName('')
            console.log('post saved: ', ...formdata)
        } catch (error) {
            toast.error(error.data.message)
            console.error('Failed to save the post: ', error)
        }
    };

    useEffect(() => {
        if(isSuccess) {
            // toast.success(data.message)
            console.log("this is success", data)
        }
    }, [isSuccess]) 

    return (
      <>
      <ToastContainer />
        <div className="container m-auto px-6 md:px-12 lg:px-6">  
        <SectionTitle 
            title="Contact Us To Build The Right Product With Right Team"
        />
            <div className="mt-10 sm:mt-0">
            <div>
                {/* <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                    <h3 className="text-2xl font-medium leading-6 text-gray-900">Company Information</h3>
                    <p className="mt-1 text-base text-gray-600">Use a permanent address where you can receive mail.</p>
                </div>
                </div> */}
                <div className="mt-5 md:mt-0">
                <form onSubmit={handleSubmit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6 grid justify-items-center">
                        <div className="grid gap-y-8 w-full lg:w-3/5">

                        <div className="">
                            {/* <label htmlFor="first-name" className="block font-medium text-base text-gray-700">
                            Company name
                            </label> */}
                            <input
                            type="text"
                            name="Name"
                            id="Name"
                            autoComplete="given-name"
                            placeHolder="Name"
                            value={individual_Name} onChange={(e)=> setIndividual_Name(e.target.value)}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base rounded-md p-2 border-2 border-solid border-gray-300 text-black"
                            />
                        </div>

                        <div className="">
                            {/* <label htmlFor="first-name" className="block font-medium text-base text-gray-700">
                            Company name
                            </label> */}
                            <input
                            type="text"
                            name="Company Name"
                            id="Company Name"
                            autoComplete="given-name"
                            placeHolder="Company Name"
                            value={company_Name} onChange={(e)=> setCompany_Name(e.target.value)}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base rounded-md p-2 border-2 border-solid border-gray-300 text-black"
                            />
                        </div>
    
                        <div className="">
                            {/* <label htmlFor="email-address" className="block text-base font-medium text-gray-700">
                            Email address
                            </label> */}
                            <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            placeHolder="Company Mail"
                            value={email} onChange={(e)=> setEmail(e.target.value)}
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border-gray-300 rounded-md p-2 border-2 border-solid  text-black"
                            />
                        </div>
    
                        <div className="">
                            <label htmlFor="country" className="block text-base font-medium text-gray-700">
                            Country
                            </label>
                            <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-3 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base p-2 border-2 border-solid"
                            value={country} onChange={(e)=> setCountry(e.target.value)}
                            >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                            </select>
                        </div>

                        <div className="">
                            <label htmlFor="company-website" className="block text-base font-medium text-gray-700">
                            Website
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                            <span className="inline-flex items-center px-3 rounded-l-md border-2 border-solid border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">
                                http://
                            </span>
                            <input
                                type="text"
                                name="company-website"
                                id="company-website"
                                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-base border-2 border-solid p-2.5 border-gray-300"
                                placeholder="www.example.com (optional)"
                                value={website} onChange={(e)=> setWebsite(e.target.value)}
                            />
                            </div>
                        </div>
                        
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
                                placeholder="Your message"
                                value={message} 
                                onChange={(e)=> setMessage(e.target.value)}
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
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-[#f49038] hover:text-[#f49038] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#f49038]"
                                    >
                                    <span>Upload Job Description</span>
                                    <input id="file-upload" name="file-upload" type="file" onChange={(e) => handleChange(e)} className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">.doc, .pnt less than 10MB</p>
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

                        <div className="">
                            <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <fieldset>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-600 rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-base">
                                        <label htmlFor="comments" className="font-medium text-gray-700">
                                        Sign
                                        </label>
                                        <p className="text-gray-500">I will like to send a non disclosure form.</p>
                                    </div>
                                    </div>
                                </div>
                                </fieldset>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                
                                <button className="inline-flex justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]"
                                onClick={(e) => {console.log("button click")}}
                                >Submit</button>
                            </div>
                            </div>
                        </div>
    
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
    
            
        </div>
      </>
    )
  }