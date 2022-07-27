import React from 'react'

const StackLogo = () => {
  return (
    <>
        <div className="pb-20">
        <div className="container m-auto px-6 md:px-12 lg:px-6">
            <div class="relative py-8 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-8">
                <div class="relative z-[1] container m-auto px-6 md:px-12">
                    <div class="m-auto text-center md:w-8/12 lg:w-6/12">
                        <h2 class="text-2xl text-white font-bold md:text-4xl">Our heroes <span class="text-sky-400">contribute</span> to the development of tailus</h2>
                    </div>
                    <div class="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
                        <div class="flex flex-wrap justify-center gap-6">
                            <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                                <img src="images/clients/airbnb.svg" class="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo airbnb" />
                            </div>
                            <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                                <img src="images/clients/microsoft.svg" class="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo microsoft" />
                            </div>
                            <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                                <img src="images/clients/ge.svg" class="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo ge" />
                            </div>
                            <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                                <img src="images/clients/bissell.svg" class="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo bissell" />
                            </div>
                            <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                                <img src="images/clients/bissell.svg" class="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo bissell" />
                            </div>
                            <div class="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                                <img src="images/clients/automatic.svg" class="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo automatic" />
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="absolute h-full inset-0 flex items-center">
                    <div aria-hidden="true" class="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
                </div>
                <div aria-hidden="true" class="absolute inset-0 w-full h-full bg-[#020314] opacity-90"></div>
            </div> 
        </div> 
        </div>
    </>
  )
}

export default StackLogo