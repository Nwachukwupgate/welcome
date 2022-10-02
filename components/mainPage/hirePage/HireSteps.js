import React from 'react'
import { motion, variants } from 'framer-motion';


const containerVariant = {
    hidden: {
        y: 100,
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


const HireSteps = () => {
  return (
    <>

        <motion.div className="py-16 bg-white overflow-hidden"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{once:true, amount:0.1}}
        variants={containerVariant}
        >
            <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
                <div>
                    <span className="block w-max mx-auto py-2 px-4 rounded-full bg-[#F49038] text-[#001935] text-sm font-semibold">Hire Workflow</span>
                    <h2 className="mt-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Hire freelancers within<br className="sm:block" hidden /> 48 Hours</h2>
                </div>
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
                    <div className="relative group">
                        <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div className="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/undraw_documents_re_isxv.svg" className="w-24 m-auto" width="512" height="512" alt="Requirement" /> 
                            <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-[#F49038]">Requirement</h4>
                            <p className="text-gray-600">Tell us your requirement and business objective.</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div className="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/undraw_hiring_re_yk5n.svg" className="w-24 m-auto" width="512" height="512" alt="Best Developers" />
                            <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-[#F49038]">Review Best Profiles</h4>
                            <p className="text-gray-600">Select the most preferred talent from the best fits.</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div className="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/undraw_start_building_re_xani.svg" className="w-24 m-auto" width="520" height="520" alt="developer fit" />
                            <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-[#F49038]">Start</h4>
                            <p className="text-gray-600">Begin project after concluding on payment structure, delivery time,SLA agreement etc.</p>
                        </div>
                    </div>
  
                </div>
            </div>
        </motion.div>   
                                
    </>
  )
}

export default HireSteps