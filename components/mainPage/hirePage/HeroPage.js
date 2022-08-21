import React from 'react'
import Link from 'next/link';

const HeroPage = () => {
  return (
    <>
        
        <div class="pt-32 pb-20 md:pt-30">
            <div class="container m-auto px-6 md:px-12 lg:px-6">
                <div class="lg:flex lg:items-center lg:gap-x-16">
                    <div class="space-y-8 lg:w-7/12">
                        <div className="flex flex-col lg:items-end lg:flex-row space-y-2 lg:space-x-2">
                        <p> <span className="py-2 px-3 rounded-full text-white bg-[#001935]">
                            New
                            </span> 
                        </p>
                        <p>
                            Wanting to know more about hiring 
                            <span className="text-[#001935]"> Read more</span> 
                        </p>
                        </div>

                        <h1 class=" font-bold text-gray-900 text-4xl md:text-6xl">Hire vetted Developers & Designers</h1>
                        <p class="text-gray-600 lg:w-11/12 text-lg">
                            Get qualified and reliable developers & designers around the world with hourly rates ranging from $4 - $100 to jump on your project within 48hrs.
                        </p>

                        <button className="inline-flex w-fit justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">
                            <Link href="/register">
                                <a>
                                <span className="block">
                                    Hire now
                                </span>
                                </a>
                            </Link>
                        </button>

                    </div>

                    <div hidden class="lg:block lg:w-5/12">
                        <img src="images/redo_all-blue.gif" class="w-full" alt="global talent" loading="lazy" width="280" height="200" />
                    </div>
                </div>
            </div>
        </div>

        <div class="pb-8">
            <div class="container m-auto px-6 md:px-12 lg:px-6">
                <div class="py-8 px-12 bg-gray-50 rounded-2xl">
                    <span class="block text-center font-medium text-[#001935]">Trusted by your favorite giants</span>
                    <div class="mt-8 flex justify-center flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                        <div class="flex items-center">
                            <img class="w-36" src="images/clients/nairas.png" alt="nairametrics" loading="lazy" width="584" height="122" />
                        </div>
                        <div class="flex items-center">
                            <img class="w-28" src="images/clients/treepzz.png" alt="treepz" loading="lazy" width="400" height="219" />
                        </div>
                        <div class="flex items-center">
                            <img class="w-28" src="images/clients/automatic.svg" alt="automatic" loading="lazy" width="400" height="219" />
                        </div>
                        <div class="flex items-center">
                            <img class="w-32" src="images/clients/cinfores(1)-PhotoRoom(1).png" alt="cinfores" loading="lazy" width="400" height="219" />
                        </div>
                        <div class="flex items-center">
                            <img class="w-24" src="images/clients/cloudenly.svg" alt="cloudenly" loading="lazy" width="400" height="219" />
                        </div>
                        <div class="flex items-center">
                            <img class="w-28" src="images/clients/Citibank.svg.png" alt="citi bank" loading="lazy" width="400" height="219" />
                        </div>
                        <div class="flex items-center">
                            <img class="w-32" src="images/clients/cornel.png" alt="cornie health" loading="lazy" width="400" height="219" />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
                                 
    </>
  )
}

export default HeroPage