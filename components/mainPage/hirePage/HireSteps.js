import React from 'react'

const HireSteps = () => {
  return (
    <>

        <div class="py-16 bg-white overflow-hidden">
            <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
                <div>
                    <span class="block w-max mx-auto py-2 px-4 rounded-full bg-[#F49038] text-[#001935] text-sm font-semibold">Hire Workflow</span>
                    <h2 class="mt-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Hire freelancers within<br class="sm:block" hidden /> 62 Hours</h2>
                </div>
                <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
                    <div class="relative group">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/undraw_documents_re_isxv.svg" class="w-24 m-auto" width="512" height="512" alt="Requirement" /> 
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-[#F49038]">Requirement</h4>
                            <p class="text-gray-600">Tell us your requirement and business objective.</p>
                        </div>
                    </div>
                    <div class="relative group">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/undraw_hiring_re_yk5n.svg" class="w-24 m-auto" width="512" height="512" alt="Best Developers" />
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">Review Best Profiles</h4>
                            <p class="text-gray-600">You screen out the best available candidates.</p>
                        </div>
                    </div>
                    <div class="relative group">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/undraw_private_data_re_4eab.svg" class="w-24 m-auto" width="512" height="512" alt="developer fit" />
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">Check for Fit</h4>
                            <p class="text-gray-600">You check for freelancers alignment with product goals.</p>
                        </div>
                    </div>
                    {/* <div class="relative group lg:hidden">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/undraw_contract_re_ves9.svg" class="w-20 -mt-2 mx-auto" width="512" height="512" alt="droomwork description" />
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">Close to the metal</h4>
                            <p class="text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>   
                                
    </>
  )
}

export default HireSteps