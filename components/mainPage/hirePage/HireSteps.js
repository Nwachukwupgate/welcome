import React from 'react'

const HireSteps = () => {
  return (
    <>

        <div class="py-16 bg-white overflow-hidden">
            <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
                <div>
                    <span class="block w-max mx-auto py-2 px-4 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">Main features</span>
                    <h2 class="mt-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">A technology-first approach to payments <br class="sm:block" hidden /> and finance</h2>
                </div>
                <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
                    <div class="relative group">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/avatars/burger.png" class="w-16 m-auto" width="512" height="512" alt="burger illustration" />
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">Close to the metal</h4>
                            <p class="text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                        </div>
                    </div>
                    <div class="relative group">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/avatars/package-delivery.png" class="w-16 m-auto" width="512" height="512" alt="package-delivery illustration" />
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">Close to the metal</h4>
                            <p class="text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                        </div>
                    </div>
                    <div class="relative group">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/avatars/trowel.png" class="w-16 m-auto" width="512" height="512" alt="package-delivery illustration" />
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">Close to the metal</h4>
                            <p class="text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                        </div>
                    </div>
                    <div class="relative group lg:hidden">
                        <div aria-hidden="true" class="absolute inset-0 rounded-xl bg-white shadow-xl transition duration-300 group-hover:scale-105 lg:group-hover:scale-110"></div>
                        <div class="relative text-center space-y-4 p-6 md:p-8">
                            <img src="images/avatars/metal.png" class="w-20 -mt-2 mx-auto" width="512" height="512" alt="package-delivery illustration" />
                            <h4 class="text-2xl text-gray-800 font-medium transition group-hover:text-yellow-800">Close to the metal</h4>
                            <p class="text-gray-600">Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat non cum doloribus aperiam voluptates nostrum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
                                
    </>
  )
}

export default HireSteps