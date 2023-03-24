import React, { useEffect, useState } from 'react';
import { motion, variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css"

const containerVariant = {
    hidden: {
        y: 50,
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

const imageVariant = {
    hidden: {
        x: 10,
        opacity: 0,
    },

    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring", bounce: 0.4, duration: 3, delay:0.3
        }
    }
}

const ProjectA = ({setShowModal}) => {

    const x = -50;
    const y = -50;
    const transformStyle = { 
        transform: `translate(${x}%, ${y}%)` 
    };

    return(
        <>
            <motion.div className="pt-2 pb-20 md:pt-[0.5rem]"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once:true, amount:0.5}}
            transition={{staggerChildren: 0.5}}
            >
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    {/* <div className="lg:flex lg:items-center lg:gap-x-16"> */}
                        <motion.div className=""
                        variants={containerVariant}
                        >
                            <div className="py-4">
                            <div className=" text-gray-600 ">
                                <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
                                <div className="md:5/12 lg:w-1/2 block relative" onClick={() => setShowModal(true)}>
                                    <img
                                    src="/images/Screen.png"
                                    alt="image"
                                    loading="lazy"
                                    width=""
                                    height="" className='lg:h-[400px]'
                                    />

                                    <FontAwesomeIcon icon={faPlay} shake size="4x" className="text-red-600 absolute top-1/2 left-2/4 h-20" style={transformStyle} />
                                </div>
                                <div className="md:7/12 lg:w-1/2">
                                    <h2 className="text-3xl font-bold text-gray-900 md:text-3xl dark:text-white">
                                    The Real Estate Developers (RED) App. For Operational automation and data analysis
                                    </h2>
                                    <p className="my-8 text-gray-600 dark:text-gray-300">
                                    RED App is a revolutionary tool for real estate developers, offering advanced automation and data analysis for informed decision-making, task tracking, and market trend analysis.
                                    </p>
                                    <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                    <div className="mt-8 flex gap-4 md:items-center">
                                        <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400">
                                            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                                        </svg>        
                                        </div>
                                        <div class="w-5/6">
                                        <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Data Driven</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Insightful. Analytical. Data-focused.  Informative.</p>
                                        </div> 
                                    </div> 
                                    <div class="pt-4 flex gap-4 md:items-center">
                                        <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>                                      
                                        </div>
                                        <div class="w-5/6">
                                        <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Real Time Tracking</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Instant. Accurate. Continuous. Agile.</p>
                                        </div> 
                                    </div> 
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                                   
                            

                        </motion.div>

                    {/* </div> */}
                </div>
            </motion.div>
        </>
    )
}

export default ProjectA