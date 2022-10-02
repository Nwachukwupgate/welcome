import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"
import SectionTitle from './title'
import { motion, variants } from 'framer-motion';


const containerVariant = {
    hidden: {
        y: 20,
        opacity: 0,
    },

    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring", bounce: 0.4, duration: 3, delay:0.3
        }
    }
}

const TestimonialPage = ({setShowModal}) => {

    const x = -50;
    const y = -50;
    const transformStyle = { 
        transform: `translate(${x}%, ${y}%)` 
    };

    // var cleft = 100;
    // var ctop = 100;
    // var ctrans = 'translate('+cleft+'px, '+ctop+'px)';
    // var css = {
    //     transform: ctrans 
    // }

  return (
    <>
        <motion.div className="container m-auto px-6 md:px-12 lg:px-6"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{once:true, amount:0.5}}
        variants={containerVariant}
        >
            <div className="bg-white dark:bg-gray-800 w-full mx-auto p-4 md:p-8">
                <SectionTitle
                    title="Testimonials"
                />
                <div className="flex items-center md:items-start flex-col md:flex-row justify-center">
                    
                    <div className="w-full md:w-2/3 self-center">
                        <p className="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-left text-lg md:text-2xl">
                            <span className="font-bold text-[#f49038]">
                                “
                            </span>
                            I needed to add more value to my customers by digitalizing nediscare but i had a big setback because i lacked the technical skills, but droomwork came to my rescue and right now i have increase the retention rate and acquisition of customers got easier.
                            <span className="font-bold text-[#f49038]">
                                ”
                            </span>
                        </p>
                        <div className="flex mt-8 items-center justify-center">
                            
                            <a href="#" className="block relative">
                                <img alt="profil" src="images/IMG-20220927-WA0009.jpg" className="object-cover rounded-full h-12 w-12 "/>
                            </a>

                            <div>
                                <div className="font-semibold text-[#f49038] ml-2 text-lg">
                                    Nediscare
                                </div>
                                {/* <span className="text-gray-400 text-xl font-light">
                                    /
                                </span> */}
                                <div className="text-gray-400 text-md ml-2">
                                    C.E.0 Nediscare
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block relative" onClick={() => setShowModal(true)}>
                        <img alt="profil" src="images/IMG-20220927-WA0009.jpg" className="mx-auto object-cover rounded-lg h-96 w-96 block "/>
                        {/* <div className="absolute top-1/2 left-2/4  text-3xl text-white" > */}
                            <FontAwesomeIcon icon={faPlay} shake size="4x" className="absolute top-1/2 left-2/4  text-white h-20" style={transformStyle} />
                        {/* </div> */}
                    </div>

                </div>
            </div>
        </motion.div>
    </>
  )
}

export default TestimonialPage