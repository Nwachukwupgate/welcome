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

const ServicesSection = () => {
    return(
        <>
            <motion.div className="pb-20"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once:true, amount:0.1}}
            variants={containerVariant}
            >
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    
                    
                    <section className="pt:2 md:pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
                        <div className="container">
                            <div className="flex flex-wrap md:mx-8">
                                <div className="mb-4 flex justify-center w-full md:w-1/2 xl:w-1/5 px-2 md:px-4">
                                    <div className="w-fit h-fit mt-7 p-1 border-l-4 border-solid border-black">
                                        <div className="flex gap-x-2 ml-1.5 text-2xl font-bold md:flex-col">
                                            <div>Our</div>
                                            <div>Services</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-2/5 px-2 md:px-4">
                                    <div className="bg-white rounded-lg overflow-hidden mb-10">
                                        <img
                                            src="images/Custom-Software-Development.jpg"
                                            alt="image"
                                            className="w-full"
                                            />
                                        <div className="p-4 sm:p-9 md:p-7 xl:p-4 text-left">
                                            <h3>
                                                <a
                                                    href="#"
                                                    className="
                                                    font-semibold
                                                    text-dark text-xl
                                                    sm:text-[22px]
                                                    md:text-xl
                                                    lg:text-[22px]
                                                    xl:text-xl
                                                    2xl:text-[22px]
                                                    mb-4
                                                    block
                                                    hover:text-primary
                                                    "
                                                    >
                                                Custom Software Build
                                                </a>
                                            </h3>
                                            <p className="text-base text-body-color leading-relaxed mb-7">
                                                With our carefully crafted software engineering process, we turn clients idea into product that users will love.
                                            </p>
                                            {/* <a
                                                href="javascript:void(0)"
                                                className="
                                                inline-block
                                                py-2
                                                px-7
                                                border border-[#E5E7EB]
                                                rounded-full
                                                text-base text-body-color
                                                font-medium
                                                hover:border-primary hover:bg-primary hover:text-white
                                                transition
                                                "
                                                >
                                            View Details
                                            </a> */}
                                            {/* <div className="mt-8"> */}
                                                <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">View Details</a>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-2/5 px-2 md:px-4">
                                    <div className="bg-white rounded-lg overflow-hidden mb-10">
                                    <img
                                        src="images/team.webp"
                                        alt="image"
                                        className="w-full"
                                        />
                                    <div className="p-4 sm:p-9 md:p-7 xl:p-4 text-left">
                                        <h3>
                                            <a
                                                href="#"
                                                className="
                                                font-semibold
                                                text-dark text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[22px]
                                                mb-4
                                                block
                                                hover:text-primary
                                                "
                                                >
                                            Dedicated Team
                                            </a>
                                        </h3>
                                        <p className="text-base text-body-color leading-relaxed mb-7">
                                            Our inhouse profesional engineers integrates very closely with your internal team to deliver value just as an inhouse team.
                                        </p>
                                        {/* <a
                                            href="javascript:void(0)"
                                            className="
                                            inline-block
                                            py-2
                                            px-7
                                            border border-[#E5E7EB]
                                            rounded-full
                                            text-base text-body-color
                                            font-medium
                                            hover:border-primary hover:bg-primary hover:text-white
                                            transition
                                            "
                                            >
                                        View Details
                                        </a> */}
                                        <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">View Details</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </motion.div>
        </>
    )
}

export default ServicesSection;