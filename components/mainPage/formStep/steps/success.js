import React, {useState,useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'




function SuccessPage() {
const router = useRouter()
const [applyEmail, setApplyEmail] = useState('')
// http://localhost:3000/register?applyUrl=https://grnh.se/8633017d1us   //normally applyurl
    useEffect(() =>{
    if (typeof window !== "undefined"){var applyUrl = JSON.parse(localStorage.getItem("applyUrl"))}
    if(applyUrl !==undefined && applyUrl !==null ){
    if(applyUrl.startsWith("mailto")){
    var regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi // The actual regex
    var matches = regex.exec(applyUrl)
    setApplyEmail(matches[1])
            
    }else{
    const timer = setTimeout(() => {
    // window.open (applyUrl, '_ blank')
    router.push(applyUrl)
    localStorage.removeItem("applyUrl")
    }, 5000);
     return () => clearTimeout(timer)
    }
     
    }
   
    }, [])
  return (
    <>
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-3">
            <div className="mx-auto lg:basis-3/6">
                <img src="images/athlete-training-outdoors.svg" />
                {/* <img src="images/watch.svg" class="w-full" alt="wath illustration" loading="lazy" width="320" height="280" /> */}
            </div>

            <div className="mx-auto lg:basis-3/6">
                <div className="flex flex-col space-y-4">
                    <p className="text-center text-[#001935] font-extrabold drop-shadow-lg shadow-black text-4xl lg:text-left ">Success!</p>
                    {applyEmail !== '' && (
                    <p className="font-bold text-lg"> Kindly send your CV to <span className="font-extrabold">{applyEmail}</span> to apply for the job</p> 
                    )}
                    {applyEmail == '' && (
                     <>
                     <p className="font-bold text-lg"> Your Details have been taken, you will be contacted for an interview session by our team not too long.</p>
                    <p className="text-gray-500">Upon completion of the next stage, you would have no need to search for contract jobs.Companies will rather apply to you. Thank you!</p>
                     </>
                    )}
             
                    <Link href="/">
                        <a className="inline-flex justify-center w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Home</a>
                    </Link>
                </div>
            </div>

        </div>
    </>
  )
}

export default SuccessPage