import React from 'react';
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

const TestPage = () => {
    return (
        <>
            <motion.div className="py-16 bg-gray-50"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once:true, amount:0.1}}
            variants={containerVariant}
            >  
                <div className="container m-auto text-gray-600 md:px-12 xl:px-6">
                    <div className="mb-12 space-y-4 px-6 md:px-0">
                        <h2 className="text-center text-2xl text-gray-900 font-bold md:text-4xl">Fans Club.</h2>
                        {/* <p className="text-center">We don't like to brag, but we don't mind letting our customers do it for us. <br/>
                        Here are a few nice things folks have said about our themes over the years.</p> */}
                    </div>
                </div>

                <div className="swiper-wrapper pb-8">
                    <div className="swiper-slide !bg-transparent px-6 md:px-0">
                    <div className="rounded-xl bg-white shadow-xl md:mx-auto lg:w-9/12 xl:w-7/12">
                        <div className="grid md:grid-cols-2">
                        <img src="images/card2.webp" className="rounded-t-xl h-full w-full object-cover md:rounded-l-xl md:rounded-tr-none" alt="image" width="640" height="422" loading="lazy" />
                        <div className="mx-auto space-y-6 p-6 text-center sm:p-8">
                            <div className="w-24 mx-auto">
                                <img src="images/scelloimage.png" alt="company logo" height="400" width="142" loading="lazy" />
                            </div>
                            <p className="text-gray-600"> <span className="font-serif">"</span> They save us time and cost for sure. Hiring well-vetted software engineers can take up alot of our time, but with droomwork we cut down those processes quickly because they provide high quality developers who meet all requirements quickly so we don't have any issues with deadlines or quality control. <span className="font-serif">"</span></p>
                            <h6 className="text-lg font-semibold leading-none">Terver Timothy</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default TestPage