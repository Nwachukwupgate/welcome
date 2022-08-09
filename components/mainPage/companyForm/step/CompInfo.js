import React from 'react';

function CompInfo({handleClick, steps, currentStep}) {
  return (
    <>
      <div className="">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Basic Informaion</span>
          </div>
          
          <div className="space-y-8">

            <div>
                <input 
                  type="text" 
                  placeholder="Company Name"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
                <input 
                  type="number" 
                  placeholder="Phone Number"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
                <input 
                  type="email" 
                  placeholder="Work Email"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
                <select 
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
                >
                  <option disabled selected hidden>Funding Level</option>
                  <option>Bootstrap</option>
                  <option>Pre-Seed</option>
                  <option>Seed</option>
                  <option>Series-A</option>
                </select>
            </div>

          </div>

          <div className="container mx-auto mt-4 mb-8">
            <div className="flex justify-between mx-auto">
                
                {/* Back button */}
                <button 
                onClick={()=>handleClick("")}
                className={`bg-[#001935] inline-flex items-center justify-center uppercase text-center text-white w-fit py-2 px-5 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 
                ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : "" }`}>
                    Previous
                </button>

                {/* Next button */}
                <button 
                onClick={() => handleClick("next")}
                className="bg-[#001935] inline-flex items-center justify-center uppercase text-center text-white w-fit py-2 px-5 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transiion duration-200 
                ease-in-out">
                    {currentStep === steps.length - 1 ? "Confirm" : "Next"}
                </button>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CompInfo