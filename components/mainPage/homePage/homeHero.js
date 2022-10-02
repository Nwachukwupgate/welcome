import React, { useEffect, useState } from 'react';
import loadClutch from './clutch';
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


const HomeHero = () => {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        loadClutch(() => {
        setLoaded(true);
        });
    });

    return(
        <>
            <motion.div className="pt-36 pb-20 md:pt-[7.5rem]"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{once:true, amount:0.5}}
            transition={{staggerChildren: 0.5}}
            >
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    <div className="lg:flex lg:items-center lg:gap-x-16">
                        <motion.div className="space-y-8 lg:w-7/12"
                        variants={containerVariant}
                        >
                            <h1 className=" font-bold text-gray-900 text-4xl md:text-5xl"> Build Custom Software &#38; Scale Up your Tech Team / Staff</h1>
                            <p className="text-gray-600 lg:w-11/12">Whether fully end to end outsourcing, dedicated team or outstaffing of vetted freelancers, we are here to see you through 
                            </p>

                            <span className="block text-gray-600">
                                <span className="mr-2">Custom Development</span> 
                                <span className="mr-2 p-1 border-x border-solid border-black">Dedicated Team</span>
                                <span>Staff Augumentation</span>
                            </span>

                            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex">
                                <a aria-label="add to slack" href="#" className="p-4 border border-gray-200 rounded-md hover:border-cyan-400 hover:shadow-lg">
                                    <div className="flex justify-center space-x-4">
                                        {/* <img className="w-6" src="images/slack.png" alt="slack logo" loading="lazy" width="128" height="128" />
                                        <span className="hidden font-medium md:block">Add to Slack</span> */}
                                        {loaded ? <div className="clutch-widget" data-nofollow="true" data-url="https://widget.clutch.co" data-widget-type="2" data-height="45" data-clutchcompany-id="1969898"></div> : ""}
                                    </div>
                                </a>        
                            </div>

                            <div>
                                🔥🌟 
                                <span>Quick Reach :</span> 
                                <Link href="https://wa.me/message/SEPR4C43ZJGSO1"><a target='_blank' className="font-semibold text-gray-700">Watsapp,</a></Link>
                                <a href="#" className="font-semibold text-gray-700">Telegram</a>
                            </div>
                        </motion.div>

                        <motion.div hidden className="lg:block lg:w-5/12"
                        variants={imageVariant}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                            }}
                        whileTap={{ scale: 0.9 }}
                        >
                            <img src="images/watch.svg" className="w-full" alt="wath illustration" loading="lazy" width="320" height="280" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default HomeHero;