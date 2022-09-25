import React from 'react'
import SectionTitle from './title'

const UniquePage = () => {
  return (
    <>
    <div className="pb-20">
        <div className="container m-auto px-4 md:px-12 lg:px-6">
            <div className="py-16 px-2 text-center md:px-8 bg-[#f3f4f6]">  
            <SectionTitle 
                title="What makes us Droomwork"
            />
                <div className="container m-auto px-2 text-gray-500 md:px-12 xl:px-0">
                    <div className="grid lg:grid-cols-6 gap-6">
                        <div className="lg:col-span-2">

                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 space-y-4 py-12 sm:px-12 lg:px-8">
                                <div className='flex justify-center'>
                                <img src="images/services/undraw_product_iteration_kjok.svg" alt="illustration" loading="lazy" width="100" height="100" />
                                </div>
                                <h3 className="text-2xl font-semibold text-cyan-900">Agile Development</h3>
                                <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                        <img src="images/services/undraw_solution_mindset_re_57bf.svg" alt="illustration" loading="lazy" width="100" height="100" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Replica Team</h3>
                                    <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                    <img src="images/services/undraw_in_the_office_re_jtgc.svg" alt="illustration" loading="lazy" width="100" height="100" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Zero Team Management</h3>
                                    <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                        <img src="images/services/undraw_certificate_re_yadi.svg" alt="illustration" loading="lazy" width="100" height="100" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Qualified Workers</h3>
                                    <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg px-8 py-12 sm:px-12 lg:px-8">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-center">
                                        <img src="images/services/undraw_co_workers_re_1i6i.svg" alt="illustration" loading="lazy" width="100" height="100" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-cyan-900">Ready Cross - Functional Team</h3>
                                    <p>Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                                </div>
                                {/* <a href="#" className="block font-medium text-blue-600">Know more</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UniquePage