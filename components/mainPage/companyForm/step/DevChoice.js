import React, {useState}  from 'react'
import styles from "../../../../styles/compCheck.module.css"

function DevChoice({handleClick, steps, currentStep}) {
  const [tags, setTags] = React.useState([]);
  const[display, setDisplay] = useState(false);
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

    {
      id: 7,
      stack: 'Scala',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/919/919834.png",
    },

    {
      id: 8,
      stack: 'Mongo db',
      stackIcon:"https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png",
    },
  ])

  const[frameWork, setFramework] = useState([
    {
      id: 1,
      stack: 'Andriod',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
    },

    {
      id: 2,
      stack: 'Swift',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/5968/5968351.png",
    },

    {
      id: 3,
      stack: 'Java',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
    },

    {
      id: 4,
      stack: 'Ruby',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/919/919852.png",
    },

    {
      id: 5,
      stack: 'Python',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/919/919834.png",
    },

    {
      id: 6,
      stack: 'Javascript',
      stackIcon:"https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png",
    },

    {
      id: 7,
      stack: 'AWS',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/919/919834.png",
    },

    {
      id: 8,
      stack: 'Google Cloud',
      stackIcon:"https://cdn.iconscout.com/icon/free/png-256/mongodb-4-1175139.png",
    },
  ])

  const[price, setPrice] = useState([
    {
      id: 1,
      stack: '5K - 10K',
      stackIcon:"$",
    },

    {
      id: 2,
      stack: '5K - 10K',
      stackIcon:"$",
    },

    {
      id: 3,
      stack: '5K - 10K',
      stackIcon:"$",
    },

    
  ])

  const[suggest, setSuggest] = useState([
    {
      id: 1,
      suggestDetail: 'abacus',
    },

    {
      id: 2,
      suggestDetail: 'arabacus',
    },

    {
      id: 3,
      suggestDetail: 'aaculus',
    },

    {
      id: 4,
      suggestDetail: 'Bvacf',
    },

    {
      id: 5,
      suggestDetail: 'cvacf',
    },

    {
      id: 6,
      suggestDetail: 'bbvacf',
    },

    {
      id: 7,
      suggestDetail: 'bacf',
    },

  ])

  const[value, setValue] = useState("")

  const [fileName, setFileName] = useState('')


  const handleChange = (event) => {
      setFileName(event.target.files[0].name)
  };

  const cancelFile = (e) => {
    e.preventDefault()
    setFileName('')
}

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
    tags.push(searchTerm)
  };

  const showClick = () => {
    setDisplay(!display)
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
      <div className="flex justify-center">
        <div className="space-y-8">

          <div>
            <p className="text-[#001935] font-bold">Choose language</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {state && state.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                      <input type="checkbox" name="" className={styles.inputType} />
                      <div className={styles.icon_box}>
                        <div className={styles.fab}>
                          <img src={items.stackIcon} />
                        </div>
                        
                        <span className={styles.fa} aria-hidden="true"> {items.stack} </span>
                      </div>
                    </label>
                  </li>
                )))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[#001935] font-bold">Choose Framework</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {frameWork && frameWork.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                      <input type="checkbox" name="" className={styles.inputType} />
                      <div className={styles.icon_box}>
                        <div className={styles.fab}>
                          <img src={items.stackIcon} />
                        </div>
                        
                        <span className={styles.fa} aria-hidden="true"> {items.stack} </span>
                      </div>
                    </label>
                  </li>
                )))}
              </ul>
            </div>
          </div>

          <div className="relative">
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
                  // onKeyUpCapture={showKeys}
                  placeholder="Press enter to add skills"
                  onChange={onChange}
                />
              </div>

              <div class="absolute left-0 z-20 w-full max-h-52 overflow-y-auto py-1 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"> 
              {suggest
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.suggestDetail.toLowerCase();

                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })

                .slice(0, 10)
                .map((item) => (
                               
                    <p class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => onSearch(item.suggestDetail)}
                    key={item.id}>
                        {item.suggestDetail}
                    </p>
                
                ))
              }
              </div>
          </div>

          <div>
                <input 
                  type="text" 
                  placeholder="How many developers do you need"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
          </div>

          {/* <div>
                <select 
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
                >
                  <option disabled selected hidden>Work Type</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>Onsite</option>
                </select>
          </div>

          <div>
              <select 
                className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
              >
                <option disabled selected hidden>Change title and content</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
          </div> */}

          <div>
            <p className="text-[#001935] font-bold">Choose Price</p>
            <div className={styles.main_container}>
              <ul className={styles.main_list}>
                {price && price.map((items => (
                  <li className={styles.single_list} key={items.id}>
                    <label className={styles.list_label}>
                      <input type="checkbox" name="" className={styles.inputType} />
                      <div className={styles.icon_box}>
                        <div className={styles.fab}>
                          {items.stackIcon}
                        </div>
                        
                        <span className={styles.fa} aria-hidden="true"> {items.stack} </span>
                      </div>
                    </label>
                  </li>
                )))}
              </ul>
            </div>
          </div>

          <p className="font-bold text-[#001935]">Have Location Prefrence?</p>
          <div className="flex gap-x-2">
            <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={(e) => {setDisplay(false)}} />
                <label for="bordered-radio-1" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
            <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={showClick} />
                <label for="bordered-radio-2" class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
          </div>

          {display &&
          <div>
              <select 
                className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg bg-white transition"
              >
                <option disabled selected hidden>Select Continent</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Australia</option>
                <option>South America</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Antartical</option>
                <option>Oceanial</option>
              </select>
          </div>
          }

          
          <div className="">
            <label className="block text-base font-base text-gray-700">File</label>
            {fileName === "" ? 
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
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
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e) => handleChange(e)} />
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

export default DevChoice;