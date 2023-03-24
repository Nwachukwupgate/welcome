import React from 'react'
import { motion, variants } from 'framer-motion';
import Link from 'next/link';

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

if (process.env.NEXT_PUBLIC_INVEST_LINK !== '') {
    var iLink =process.env.NEXT_PUBLIC_INVEST_LINK
} else {
    iLink = ''
    // api_origin = 'http://localhost:3000'
}

if (process.env.NEXT_PUBLIC_ORDER_LINK !== '') {
    var oLink =process.env.NEXT_PUBLIC_ORDER_LINK
} else {
    oLink = ''
    // api_origin = 'http://localhost:3000'
}

if (process.env.NEXT_PUBLIC_SALES_LINK !== '') {
    var sLink =process.env.NEXT_PUBLIC_SALES_LINK
} else {
    sLink = ''
    // api_origin = 'http://localhost:3000'
}

const CallAction = () => {
  return (
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
                            <div class="bg-gradient-to-br from-[#F49038] to-[#001935] py-16 md:bg-gradient-to-r">
                                <div class="container m-auto px-6 text-center md:px-12 lg:px-20">
                                    <h2 class="mb-8 text-4xl font-bold text-white md:text-4xl">
                                    Get the Real Estate developers App, today.
                                    </h2>
                                    <div className="flex gap-1.5 flex-col md:justify-around md:flex-row">
                                    <Link href={`${oLink}`}>
                                        <a                                    
                                        class="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                        >
                                        <span class="relative text-base font-semibold text-blue-600"
                                            >Order Demo</span
                                        >
                                        </a>
                                    </Link>

                                    <Link href={`${sLink}`}>
                                        <a
                                        
                                        class="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                        >
                                        <span class="relative text-base font-semibold text-blue-600"
                                            >Sales Partner</span
                                        >
                                        </a>
                                    </Link>

                                    <Link href={`${iLink}`}>
                                        <a
                                        
                                        class="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                        >
                                        <span class="relative text-base font-semibold text-blue-600"
                                            >Product Investor</span
                                        >
                                        </a>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    {/* </div> */}
                </div>
            </motion.div>
  )
}

export default CallAction