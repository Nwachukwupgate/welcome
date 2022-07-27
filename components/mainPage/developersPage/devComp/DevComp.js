import SectionTitle from 'components/mainPage/homePage/title'
import React from 'react'

function DevComp() {
  return (
    <>
        <section className=" mx-auto bg-[#F7F7F7] py-20 lg:py-[70px] md:shadow-lg ">
            <SectionTitle
                title="We are Backed By Engineers in"
            />
            <div className="">
                <div className="flex flex-wrap ">
                    <div className="w-full px-4">
                        <div className="flex flex-wrap justify-center items-center">
                        <a
                            className="
                            w-[150px]
                            2xl:w-[180px]
                            py-5
                            flex
                            items-center
                            justify-center
                            mx-4
                            "
                            >
                        <img
                            src="images/encrypted-tbn0_gstatic_com-images-removebg-preview.png"
                            alt="image"
                            className="w-full "
                            />
                        </a>
                        <a
                            className="
                            
                            w-[200px]
                            2xl:w-[180px]
                            py-5
                            flex
                            items-center
                            justify-center
                            mx-4
                            "
                            >
                        <img
                            src="images/fw-1-removebg-preview.png"
                            alt="image"
                            className="w-full"
                            />
                        </a>
                        <a
                            className="
                            w-[150px]
                            2xl:w-[180px]
                            py-5
                            flex
                            items-center
                            justify-center
                            mx-4
                            "
                            >
                        <img
                            src="https://iconape.com/wp-content/files/vc/300542/svg/300542.svg"
                            alt="image"
                            className="w-full "
                            />
                        </a>
                        <a
                            className="
                            w-[150px]
                            2xl:w-[180px]
                            py-5
                            flex
                            items-center
                            justify-center
                            mx-4
                            "
                            >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/GTBank_logo.svg/1200px-GTBank_logo.svg.png"
                            alt="image"
                            className="w-full"
                            />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DevComp