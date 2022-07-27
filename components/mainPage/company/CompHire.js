import React from 'react';
import Link from 'next/link';

function CompHire() {
  return (
    <>
        <div className="text-center pb-10 lg:pb-20">
            <button className="inline-flex w-fit justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">
              <Link href="/companyStep">
                  <a>
                  <span className="block">
                      Hire now
                  </span>
                  </a>
              </Link>
            </button>
        </div>
    </>
  )
}

export default CompHire