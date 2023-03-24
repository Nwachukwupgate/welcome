import React from 'react';
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

const TitlePage = () => {

    return(
        <>
            <motion.div className="pt-36 pb-4 md:pt-[8rem]"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once:true, amount:0.5}}
            transition={{staggerChildren: 0.5}}
            >
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    
                    <motion.div className=""
                    variants={containerVariant}
                    >
                        
                        <div className="flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    Our Portfolio
                                </span>
                                <h2
                                    className="text-dark mb-4 text-4xl font-bold sm:text-4xl md:text-[40px]"
                                >
                                    Our Recent Product(s)
                                </h2>
                                <p className="text-body-color text-base">
                                Track, optimize and achieve business success. Our innovative product offers real-time monitoring and powerful features.
                                </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                        
                    
                </div>
            </motion.div>
        </>
    )
}

export default TitlePage