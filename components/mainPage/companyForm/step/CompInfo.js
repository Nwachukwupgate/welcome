import React from 'react';

function CompInfo() {
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

            </div>
      </div>
    </>
  )
}

export default CompInfo