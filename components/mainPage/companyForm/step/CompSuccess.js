import React from 'react'
import Link from 'next/link'

function CompSuccess() {
  return (
    <>
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-3">

            <div className="mx-auto lg:basis-3/6">
                <img src="images/athlete-training-outdoors.svg" />
                {/* <img src="images/watch.svg" class="w-full" alt="wath illustration" loading="lazy" width="320" height="280" /> */}
            </div>

            <div className="mx-auto lg:basis-3/6">
                <div className="flex flex-col space-y-4">
                    <p className="text-center text-[#001935] font-extrabold drop-shadow-lg shadow-black text-4xl lg:text-left ">Success!</p>
                    <p className="font-bold text-lg"> Your Details have been taken, you will be contaced shortly.</p>
                    <p className="text-gray-500">Thank you for choosing Droomwork</p>
                    <Link href="/">
                        <a className="inline-flex justify-center w-fit px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">Home</a>
                    </Link>
                </div>
            </div>

        </div>
    </>
  )
}

export default CompSuccess