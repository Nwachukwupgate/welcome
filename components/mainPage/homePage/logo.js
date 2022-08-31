import React from 'react'

const LogoCompany = () => {
  return (
    <>
      <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="relative py-8 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-8">
            <div className="relative z-[1] container m-auto px-6 md:px-12">
                <div className="m-auto text-center md:w-8/12 lg:w-6/12">
                    <h2 className="text-2xl text-white font-bold md:text-4xl">Our Clients <span className="text-sky-400">are</span> happy companies you know</h2>
                </div>
                <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                            <img src="images/clients/nairaman-PhotoRoom.png" className="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo airbnb" />
                        </div>
                        <div className="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                            <img src="images/clients/cinfores(1)-PhotoRoom(1).png" className="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo microsoft" />
                        </div>
                        <div className="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                            <img src="images/clients/treepzs-PhotoRoom.png" className="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo ge" />
                        </div>
                        <div className="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                            <img src="images/clients/pennecklogo.png" className="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo bissell" />
                        </div>
                        <div className="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                            <img src="images/clients/bissell.svg" className="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo bissell" />
                        </div>
                        <div className="group py-2 px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
                            <img src="images/clients/automatic.svg" className="contrast-0 transition group-hover:contrast-100" loading="lazy" alt="logo automatic" />
                        </div>
                    </div>
                </div>
            </div>
            <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
                <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
            </div>
            <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-90"></div>
        </div> 
      </div>                           
    </>
  )
}

export default LogoCompany