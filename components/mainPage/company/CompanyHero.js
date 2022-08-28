import React,{useState} from 'react';
import { useQuickHireMutation } from "reactWrapper/redux/apiSlice";

if(process.env.APP_env === 'development') {
    var api_origin = 'http://127.0.0.1:3333'
} else {
    api_origin = 'https://api.droomwork.io'
// api_origin = 'http://localhost:3000'
}

function CompanyHero() {

    const [ quickHire, {data, isSuccess, isError, error, isLoading }] = useQuickHireMutation();
    const [email, setEmail] = useState('')
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = async (e)=> {
        e.preventDefault()
        var formdata = new FormData();
        formdata.append("email", email);

        setIsPending(true)
        await fetch(`${api_origin}/api/v1/comp/quickHire`,{
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-type':'application/json',
                'Accept':'application/json',
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(formdata)
        }).then(response => {
            if (!response.ok) {
                const validation = response.json();
              
                setIsPending(false)
              }else{
                const valid = response.json();
           
                setIsPending(false)
              }
        })

        // try {
        //     const response = await quickHire(formdata).unwrap();
        //     console.log('fulfilled', response)
        // } catch (error) {
        //     console.error('rejected', error.data.message);
        // }
    }

  return (
    <>
        <section className="pt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
            <div className="space-y-4  sm:text-center lg:text-left lg:space-y-10">
                <div>
                    <p className="text-[#F49038] text-lg ml-2 mb-[0.8rem] font-medium">For Company</p>
                    <h1 className="text-gray-900 font-bold text-4xl xl:text-5xl">
                        Hire Pre-Screened Developers for Full Time Jobs in Your Company
                    </h1>
                </div>
                
                <p className="text-gray-600 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    We have engineers with strong technical communication & cultural skill fit to match your company culture & time zone
                </p>
                <div>
                    
                    <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="inline-flex w-fit justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Quick Hire</button>
                    </form>

                    <p className="text-gray-800 py-3">
                        Are you a developer? <span className="text-[#F49038]">Get Hired</span>
                    </p>
                </div>
            </div>
            {/* <div class="hidden lg:block lg:w-1/12 px-4"></div> */}
            <div class="hidden w-full lg:block lg:w-full py-4">
                <div class="lg:text-right lg:ml-auto">
                <div class="relative inline-block z-10 pt-11 lg:pt-0">
                    <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    class="max-w-full lg:ml-auto"
                    />
                    <span class="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#F49038" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#F49038" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#F49038" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#F49038" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#F49038" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#F49038" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#F49038" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#F49038" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#F49038" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#F49038" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#F49038" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#F49038" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#F49038" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#F49038" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#F49038" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#F49038" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#F49038" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#F49038" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#F49038" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#F49038" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#F49038" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#F49038" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#F49038" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#F49038" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#F49038" />
                    </svg>
                    </span>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CompanyHero