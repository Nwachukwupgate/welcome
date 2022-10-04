import React from 'react'
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

const UniquePage = () => {
  return (
    <>
    <div className="pb-20">
        <motion.div className="container m-auto px-4 md:px-12 lg:px-6"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{once:true, amount:0.1}}
        variants={containerVariant}
        >
            <div className="py-16 px-2 text-center md:px-8 bg-[#f3f4f6]">  
            <SectionTitle 
                title="Our Engineering Process"
            />
                <div className="container m-auto px-2 text-gray-500 md:px-12 xl:px-0">
                    <div className="grid lg:grid-cols-6 gap-6">
                        <div className="lg:col-span-2">

                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 space-y-4 py-12 sm:px-12 lg:px-8">
                                <div className='flex justify-center'>
                                <img src="images/idea.jpg" alt="illustration" loading="lazy" width="260" />
                                </div>
                                <h3 className="text-2xl font-semibold text-cyan-900">Idea Discussion and Delivery Estimation</h3>
                               <div className='flex justify-center'>
                               <ul className=' list-disc text-left'>
                                    <li>Problem Understanding</li>
                                    <li>Requirement Gathering</li>
                                    <li>Research</li>
                                    <li>Approximate Estimation</li>
                                </ul>
                               </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                        <img src="images/plan.jpg" alt="illustration" loading="lazy" width="300" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Planning</h3>
                               <div className='flex justify-center'>
                               <ul className=' list-disc text-left'>
                                    <li>Information Architecture</li>
                                    <li>Tech Stack and Architecture</li>
                                    <li>Development Plan</li>
                                </ul>
                               </div>
                                  
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                    <img src="images/9933427_4300580.jpg" alt="illustration" loading="lazy" width="170"/>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Design</h3>
                                    <div className='flex justify-center'>
                               <ul className=' list-disc text-left'>
                               <li>Identity Deign</li>
                                    <li>Wireframe</li>
                                    <li>Prototype</li>
                                    <li>UI Mockup</li>
                                </ul>
                               </div>
                                  
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                        <img src="images/coding.jpg" alt="illustration" loading="lazy" width="170" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Coding</h3>
                                    <div className='flex justify-center'>
                               <ul className=' list-disc text-left'>
                               <li>Website Layout</li>
                                </ul>
                               </div>
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                        <img src="images/team.jpg" alt="illustration" loading="lazy" width="210" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Testing</h3>
                                    <div className='flex justify-center'>
                               <ul className=' list-disc text-left'>
                               <li>Testing Autoation</li>
                                    <li>Useability Testing</li>
                                    <li>Security Checks</li>
                                </ul>
                               </div>
                        
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                        <img src="images/deploy.jpg" alt="illustration" loading="lazy" width="190" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Deployment and Maintenance</h3>
                                    <div className='flex justify-center'>
                               <ul className=' list-disc text-left'>
                               <li>Your complete source code and build files</li>
                                    <li>Project Reviews</li>
                                    <li>User feedback</li>
                                    <li>1 Month free Maintenance/Support</li>
                                </ul>
                               </div>
                                 
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default UniquePage