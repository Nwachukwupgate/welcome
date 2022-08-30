import React from 'react'
import Link from 'next/link';

const WhatPage = () => {
  return (
    <>
        <section class="bg-white dark:bg-gray-800">
        

        <div class="container px-6 py-16 mx-auto">
            <div class="items-center flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/2 order-last mt-4 lg:mt-0 lg:order-first">
                    <div class="lg:max-w-lg">
                        <h3 class="text-3xl mt-2 leading-snug font-semibold text-gray-600 dark:text-white md:text-4xl lg:text-5xl">What Droomwork.io freelancers bring</h3>
                        <p class="prose mt-2 text-xl text-gray-600 dark:text-gray-400">Startups and companies spend 10% of their time recruiting and 90% of their making up for recruitment mistakes. But droomwork freelancers removes talent hiring mistakes.</p>
                        <button class="w-fit inline-flex justify-center px-5 py-3 mt-2 text-xs font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">
                        <Link href="/recruiters">
                            <a>
                            Hire Freelancers
                            </a>
                        </Link>
                        </button>
                    </div>
                </div>
        
                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img class="w-full h-full lg:max-w-2xl" src="images/giphygraph.gif" alt="Catalogue-pana.svg" />
                    {/* <div style={{"width": "100%", "height": "0", "paddingBottom": "56%", "position": "relative" }}><iframe src="https://giphy.com/embed/L1R1tvI9svkIWwpVYr" width="100%" height="100%" style={{position: "absolute"}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/Pluralsight-computer-technology-coding-L1R1tvI9svkIWwpVYr"></a></p> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhatPage