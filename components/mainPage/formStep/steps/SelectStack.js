import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands, faHtml5 } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"
import styles from "../../../../styles/check.module.css"

function SelectStack({handleClick, steps, currentStep}) {
  const[state, setState] = useState([
    {
      id: 1,
      stack: 'Node.js',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/919/919825.png",
    },

    {
      id: 2,
      stack: 'React.js',
      stackIcon:"https://cdn-icons-png.flaticon.com/512/875/875209.png",
    },

    {
      id: 3,
      stack: 'django',
      stackIcon:"https://cdn.iconscout.com/icon/free/png-128/django-3628142-3030962.png",
    },

    {
      id: 4,
      stack: 'Flask',
      stackIcon:"https://www.seekpng.com/png/detail/70-701539_flask-flask-python-png.png",
    },

    {
      id: 5,
      stack: 'Laravel',
      stackIcon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtzvOctzLZMfLs_OKQ29xv4nIGC75O2D0efZlLjo784_w811tB1yWBkYXrd8GJJabH8A&usqp=CAU",
    },

    {
      id: 6,
      stack: 'tailwind',
      stackIcon:"https://raw.githubusercontent.com/github/explore/882462b8ecc337fd9c9b2572bc463a1cbc88fb6a/topics/tailwind/tailwind.png",
    },
  ])

  const[show, setShow] = useState(true)

  const showSelect = (e)=> {
    e.preventDefault()
    setShow(!show)
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="space-y-8">

          <div className="flex flex-col text-center">
            <span className="text-2xl font-semibold">Choose Your Framework</span>
          </div>

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
                      <span onClick={showSelect} className={`${show ? "block" : "hidden"} ml-2`}> + </span>
                      
                      <div className={`${show ? "hidden" : "block"}`}>
                        <select>
                          <option>2 years</option>
                          <option>3 years</option>
                          <option>4 years</option>
                        </select>
                      </div>
                    </div>
                  </label>
                </li>
              )))}
            </ul>

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

        </div>
      </div>
    </>
  )
}

export default SelectStack