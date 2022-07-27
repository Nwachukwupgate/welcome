import React, { useEffect, useState } from 'react';
import loadClutch from './clutch';

const HomeHero = () => {

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        loadClutch(() => {
        setLoaded(true);
        });
    });

    return(
        <>
            <div className="pt-36 pb-20 md:pt-[6.5rem]">
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    <div className="lg:flex lg:items-center lg:gap-x-16">
                        <div className="space-y-10 lg:w-7/12">
                            <h1 className=" font-bold text-gray-900 text-4xl md:text-5xl"> We Build Custom Software And Help Tech Companies Scale Up Their Team</h1>
                            <p className="text-gray-600 lg:w-11/12">Whether fully end to end outsourcing, dedicated team or outstaffing of prevetted developers, we are here to see you through 
                            </p>

                            <span className="block text-gray-600">
                                <span className="mr-2">Custom Development</span> 
                                <span className="mr-2 p-1 border-x border-solid border-black">Dedicated Team</span>
                                <span>Hire Talent</span>
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
                                <span>Other integrations :</span> 
                                <a href="#" class="font-semibold text-gray-700">Discord,</a>
                                <a href="#" class="font-semibold text-gray-700">Telegram</a>
                            </div>
                        </div>

                        <div hidden class="lg:block lg:w-5/12">
                            <img src="images/unsplash_sbVu5zitZt0(2).png" class="w-full" alt="wath illustration" loading="lazy" width="320" height="230" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHero;