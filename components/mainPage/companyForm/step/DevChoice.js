import React, {useState}  from 'react'
import styles from "../../../../styles/compCheck.module.css"

function DevChoice() {
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
                  type="text" 
                  placeholder="How many developers do you need"
                  className="w-full py-3 px-4 border border-solid border-gray-400  outline-0 rounded-lg placeholder:text-[#001935]  placeholder:font-bold bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                />
          </div>

          <div>
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
          </div>

          <div className="">
            <label className="block text-base font-base text-gray-700">File</label>
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
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">.doc, .pnt less than 10MB</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default DevChoice;