import React from 'react'

function StepCrtl({handleClick, steps, currentStep}) {
  return (
    <>
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
    </>
  )
}

export default StepCrtl