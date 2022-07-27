import React from 'react'
import styles from "../../../../styles/check.module.css"

function SelectLast({handleClick, steps, currentStep}) {
  const [tags, setTags] = React.useState([]);

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
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Basic Informaion</span>
          </div>
          
          <div className="space-y-8">

            <div>
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
                <input 
                  type="text" 
                  placeholder="Last Name"
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
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
            </div>

            <div>
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
    </>
  )
}

export default SelectLast