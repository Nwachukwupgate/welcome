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
                                    The Real Estate Developers (RED) App.
                                    </h2>
                                    <p className="my-8 text-gray-600 dark:text-gray-300">
                                    The RED App is a revolutionary tool for real estate developers, offering advanced operational automation and data analytics for ambitious real estate development companies looking at:
                                    </p>
                                    <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                    <div className="mt-8 flex gap-4 md:items-center">
                                        <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>         
                                        </div>
                                        <div class="w-5/6">
                                        <h4 class="font-semibold text-lg text-gray-700 dark:text-indigo-300">Scaling</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Handling larger projects comes with lots of complexities. Management of all processes and resoures is what the RED App delivers</p>
                                        </div> 
                                    </div> 
                                    <div class="pt-4 flex gap-4 md:items-center">
                                        <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>                                      
                                        </div>
                                        <div class="w-5/6">
                                        <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Remote Work</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Staffs, contractors,sales, media and even management department can now work remotely </p>
                                        </div> 
                                    </div> 

                                    <div class="pt-4 flex gap-4 md:items-center">
                                        <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>                                      
                                        </div>
                                        <div class="w-5/6">
                                        <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Automate Operations</h4>
                                        <p class="text-gray-500 dark:text-gray-400">Automation of all process from traditional paper book keeping to total digitization of all company operations brings tremedous efficiency and productivity to your company</p>
                                        </div> 
                                    </div> 


                                    <div class="pt-4 flex gap-4 md:items-center">
                                        <div class="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">  
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 m-auto text-teal-600 dark:text-teal-400">
                                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>                                      
                                        </div>
                                        <div class="w-5/6">
                                        <h4 class="font-semibold text-lg text-gray-700 dark:text-teal-300">Leverage Data</h4>
                                        <p class="text-gray-500 dark:text-gray-400"> Say NO to gut-driven decision making. Make data driven decisions that will navigate the company to higher success through data analysis and save your investor funds from going down the drain</p>
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