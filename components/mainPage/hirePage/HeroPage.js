import React from 'react'
import Link from 'next/link';
import { motion, variants } from 'framer-motion';

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

const HeroPage = () => {
  return (
    <>
        <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren: 0.5}}>
            <div className="pt-32 pb-20 md:pt-30">
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    <div className="lg:flex lg:items-center lg:gap-x-16">

                        <motion.div 
                        className="space-y-8 lg:w-7/12"
                        variants={containerVariant}
                        >
                            <div className="flex flex-col lg:items-end lg:flex-row space-y-2 lg:space-x-2">
                            <p> <span className="py-2 px-3 rounded-full text-white bg-[#001935]">
                                New
                                </span> 
                            </p>
                            <p>
                                Wanting to know more about hiring 
                                <span className="text-[#F49038]"><Link href="/blog/"><a> Read more</a></Link></span> 
                            </p>
                            </div>

                            <h1 className=" font-bold text-gray-900 text-4xl md:text-6xl">Hire vetted Developers & Designers</h1>
                            <p className="text-gray-600 lg:w-11/12 text-lg">
                                Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs.
                            </p>

                            <button className="inline-flex w-fit justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">
                                <Link href="/recruiters">
                                    <a>
                                    <span className="block">
                                        Hire now
                                    </span>
                                    </a>
                                </Link>
                            </button>

                        </motion.div>

                        <motion.div hidden 
                        className="lg:block lg:w-5/12"
                        variants={imageVariant}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                            }}
                        whileTap={{ scale: 0.9 }}
                        >
                            <img src="images/redo-blue-with-rotation-22-july(2).gif" className="w-full h-full" alt="global talent" loading="lazy" />
                        </motion.div>

                    </div>
                </div>
            </div>

            <motion.div 
            className="pb-8"
            variants={containerVariant}
            >
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    <div className="py-8 px-12 bg-gray-50 rounded-2xl">
                        <span className="block text-center font-medium text-[#001935]">Trusted by your favorite giants</span>
                        <div className="mt-8 flex justify-center flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                            <div className="flex items-center">
                                <img className="w-36" src="images/clients/nairas.png" alt="nairametrics" loading="lazy" width="584" height="122" />
                            </div>
                            <div className="flex items-center">
                                <img className="w-28" src="images/clients/treepzz.png" alt="treepz" loading="lazy" width="400" height="219" />
                            </div>
                            <div className="flex items-center">
                                <img className="w-28" src="images/clients/automatic.svg" alt="automatic" loading="lazy" width="400" height="219" />
                            </div>
                            <div className="flex items-center">
                                <img className="w-32" src="images/clients/cinfores(1)-PhotoRoom(1).png" alt="cinfores" loading="lazy" width="400" height="219" />
                            </div>
                            <div className="flex items-center">
                                <img className="w-24" src="images/clients/cloudenly.svg" alt="cloudenly" loading="lazy" width="400" height="219" />
                            </div>
                            <div className="flex items-center">
                                <img className="w-28" src="images/clients/Citibank.svg.png" alt="citi bank" loading="lazy" width="400" height="219" />
                            </div>
                            <div className="flex items-center">
                                <img className="w-32" src="images/clients/cornel.png" alt="cornie health" loading="lazy" width="400" height="219" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div> 
        </motion.div>
    </>
  )
}

export default HeroPage