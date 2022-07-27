import React from 'react'

function SelectLevel({handleClick, steps, currentStep}) {
  return (
    <>
      <form>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Welcome to Droomwork</span>
            <span className="text-lg" >Select your Level and Stack</span>
          </div>

          <div>
            <div class="flex items-center">
              <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="orange-radio" class="ml-2 text-lg text-gray-900 dark:text-gray-300">Entry</label>
            </div>

            <div class="flex items-center">
              <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="orange-radio" class="ml-2 text-lg text-gray-900 dark:text-gray-300">Mid-Level</label>
            </div>

            <div class="flex items-center">
              <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="orange-radio" class="ml-2 text-lg text-gray-900 dark:text-gray-300">Senior</label>
            </div>
          </div>

          <div class="flex flex-wrap -mx-4">
            <div class="w-full">
                <div class="">
                  <div class="relative">
                      <select class="
                        w-full
                        border-[1.5px] border-form-stroke
                        rounded-lg
                        py-3
                        px-5
                        font-normal
                        text-medium
                        text-body-color
                        outline-none
                        focus:border-primary
                        active:border-primary
                        transition
                        disabled:bg-[#F5F7FD] disabled:cursor-default
                        appearance-none
                        ">
                        <option value=""> Web-Frontend </option>
                        <option value="">Web-Backend</option>
                        <option value=""> Mobile App </option>
                      </select>
                      <span class="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        mt-[-2px]
                        w-[10px]
                        h-[10px]
                        border-r-2 border-b-2 border-body-color
                        rotate-45
                        bg-gray-400
                        ">
                      </span>
                  </div>
                </div>
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
            onClick={() => handleClick("next")}
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

export default SelectLevel