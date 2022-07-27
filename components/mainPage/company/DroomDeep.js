import React from 'react'

function DroomDeep() {
  return (
    <>
        <div className="container mx-auto">
            <div className="flex flex-col space-y-16 items-center lg:flex-row lg:justify-center">
                <div>
                    <div className="flex flex-col space-y-8 text-center lg:text-left">
                        <div>
                            <h1 className="text-gray-900 font-bold text-4xl xl:text-5xl">
                                Droomwork Deep <span className="lg:block"> Developer Profile </span>
                            </h1>
                        </div>

                        <div>
                            <p className="text-gray-600 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">Our deep developer profile is exclusive for recruiters to view. It let's you see and explore the developers in a more pratical way so you know their real strength & weaknesses.</p>
                        </div>

                        <div>
                            <button className="inline-flex w-fit justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Quick Hire</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="images/droomworkdeep41.png" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DroomDeep