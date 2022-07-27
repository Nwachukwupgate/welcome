const ServicesSection = () => {
    return(
        <>
            <div className="pb-20">
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    
                    
                    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
                        <div className="container">
                            <div className="flex flex-wrap md:mx-8">
                                <div className="mb-4 flex justify-center w-full md:w-1/2 xl:w-1/5 px-4">
                                    <div className="w-fit h-fit mt-7 p-1 border-l-4 border-solid border-black">
                                        <div className="flex gap-x-2 ml-1.5 text-2xl font-bold md:flex-col">
                                            <div>Our</div>
                                            <div>Services</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-2/5 px-4">
                                    <div className="bg-white rounded-lg overflow-hidden mb-10">
                                        <img
                                            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                                            alt="image"
                                            className="w-full"
                                            />
                                        <div className="p-4 sm:p-9 md:p-7 xl:p-4 text-left">
                                            <h3>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="
                                                    font-semibold
                                                    text-dark text-xl
                                                    sm:text-[22px]
                                                    md:text-xl
                                                    lg:text-[22px]
                                                    xl:text-xl
                                                    2xl:text-[22px]
                                                    mb-4
                                                    block
                                                    hover:text-primary
                                                    "
                                                    >
                                                50+ Best creative website themes & templates
                                                </a>
                                            </h3>
                                            <p className="text-base text-body-color leading-relaxed mb-7">
                                                Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                                elit. Lorem consectetur adipiscing elit.
                                            </p>
                                            {/* <a
                                                href="javascript:void(0)"
                                                className="
                                                inline-block
                                                py-2
                                                px-7
                                                border border-[#E5E7EB]
                                                rounded-full
                                                text-base text-body-color
                                                font-medium
                                                hover:border-primary hover:bg-primary hover:text-white
                                                transition
                                                "
                                                >
                                            View Details
                                            </a> */}
                                            {/* <div className="mt-8"> */}
                                                <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">View Details</a>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-2/5 px-4">
                                    <div className="bg-white rounded-lg overflow-hidden mb-10">
                                    <img
                                        src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-02.jpg"
                                        alt="image"
                                        className="w-full"
                                        />
                                    <div className="p-4 sm:p-9 md:p-7 xl:p-4 text-left">
                                        <h3>
                                            <a
                                                href="#"
                                                class="
                                                font-semibold
                                                text-dark text-xl
                                                sm:text-[22px]
                                                md:text-xl
                                                lg:text-[22px]
                                                xl:text-xl
                                                2xl:text-[22px]
                                                mb-4
                                                block
                                                hover:text-primary
                                                "
                                                >
                                            The ultimate UX and UI guide to card design
                                            </a>
                                        </h3>
                                        <p className="text-base text-body-color leading-relaxed mb-7">
                                            Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                            elit. Lorem consectetur adipiscing elit.
                                        </p>
                                        {/* <a
                                            href="javascript:void(0)"
                                            className="
                                            inline-block
                                            py-2
                                            px-7
                                            border border-[#E5E7EB]
                                            rounded-full
                                            text-base text-body-color
                                            font-medium
                                            hover:border-primary hover:bg-primary hover:text-white
                                            transition
                                            "
                                            >
                                        View Details
                                        </a> */}
                                        <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">View Details</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default ServicesSection;