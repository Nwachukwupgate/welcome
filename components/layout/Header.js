import { useState, useEffect } from "react";
import Link from 'next/link';
import EasyHTTP from '../../helpers/easyHttp'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const simpleHttp =  new EasyHTTP()
export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false)
    
  


    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const scrollTo = () => {
        document.getElementById('form').scrollIntoView({behavior: "smooth", inline: "nearest"});
    }

    const changeBorder = () => {
        if (window.scrollY >= 66) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
    
      useEffect(() => {
        changeBorder()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBorder)
      })

    return (
        // <div className="relative z-50"> 
        //   <div className="w-full bg-gray-900 fixed" style={{position:"fixed", top:"0", right:"0"}}>

        //     <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        //       <div className="relative flex items-center justify-between">
        //         <a
        //           href="/"
        //           aria-label="Company"
        //           title="Company"
        //           className="inline-flex items-center"
        //         >
        //           <svg
        //             className="w-8 text-teal-accent-400"
        //             viewBox="0 0 24 24"
        //             strokeLinejoin="round"
        //             strokeWidth="2"
        //             strokeLinecap="round"
        //             strokeMiterlimit="10"
        //             stroke="currentColor"
        //             fill="none"
        //           >
        //             <rect x="3" y="1" width="7" height="12" />
        //             <rect x="3" y="17" width="7" height="6" />
        //             <rect x="14" y="1" width="7" height="6" />
        //             <rect x="14" y="11" width="7" height="12" />
        //           </svg>
        //           <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
        //             Company
        //           </span>
        //         </a>
        //         <ul className="flex items-center hidden space-x-8 lg:flex">
        //           <li>
        //             <a
        //               href="/"
        //               aria-label="Our product"
        //               title="Our product"
        //               className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
        //             >
        //               Product
        //             </a>
        //           </li>
        //           <li>
        //             <a
        //               href="/"
        //               aria-label="Our product"
        //               title="Our product"
        //               className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
        //             >
        //               Features
        //             </a>
        //           </li>
        //           <li>
        //             <a
        //               href="/"
        //               aria-label="Product pricing"
        //               title="Product pricing"
        //               className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
        //             >
        //               Pricing
        //             </a>
        //           </li>
        //           <li>
        //             <a
        //               href="/"
        //               aria-label="About us"
        //               title="About us"
        //               className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
        //             >
        //               About us
        //             </a>
        //           </li>
        //           <li>
        //             <a
        //               href="/"
        //               className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        //               aria-label="Sign up"
        //               title="Sign up"
        //             >
        //               Sign up
        //             </a>
        //           </li>
        //         </ul>
        //         <div className="lg:hidden">
        //           <button
        //             aria-label="Open Menu"
        //             title="Open Menu"
        //             className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
        //             onClick={() => setIsMenuOpen(true)}
        //           >
        //             <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
        //               <path
        //                 fill="currentColor"
        //                 d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
        //               />
        //               <path
        //                 fill="currentColor"
        //                 d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
        //               />
        //               <path
        //                 fill="currentColor"
        //                 d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
        //               />
        //             </svg>
        //           </button>
        //           {isMenuOpen && (
        //             <div className="absolute top-0 left-0 w-full">
        //               <div className="p-5 bg-white border rounded shadow-sm">
        //                 <div className="flex items-center justify-between mb-4">
        //                   <div>
        //                     <a
        //                       href="/"
        //                       aria-label="Company"
        //                       title="Company"
        //                       className="inline-flex items-center"
        //                     >
        //                       <svg
        //                         className="w-8 text-deep-purple-accent-400"
        //                         viewBox="0 0 24 24"
        //                         strokeLinejoin="round"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeMiterlimit="10"
        //                         stroke="currentColor"
        //                         fill="none"
        //                       >
        //                         <rect x="3" y="1" width="7" height="12" />
        //                         <rect x="3" y="17" width="7" height="6" />
        //                         <rect x="14" y="1" width="7" height="6" />
        //                         <rect x="14" y="11" width="7" height="12" />
        //                       </svg>
        //                       <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
        //                         Company
        //                       </span>
        //                     </a>
        //                   </div>
        //                   <div>
        //                     <button
        //                       aria-label="Close Menu"
        //                       title="Close Menu"
        //                       className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        //                       onClick={() => setIsMenuOpen(false)}
        //                     >
        //                       <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
        //                         <path
        //                           fill="currentColor"
        //                           d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
        //                         />
        //                       </svg>
        //                     </button>
        //                   </div>
        //                 </div>
        //                 <nav>
        //                   <ul className="space-y-4">
        //                     <li>
        //                       <a
        //                         href="/"
        //                         aria-label="Our product"
        //                         title="Our product"
        //                         className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        //                       >
        //                         Product
        //                       </a>
        //                     </li>
        //                     <li>
        //                       <a
        //                         href="/"
        //                         aria-label="Our product"
        //                         title="Our product"
        //                         className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        //                       >
        //                         Features
        //                       </a>
        //                     </li>
        //                     <li>
        //                       <a
        //                         href="/"
        //                         aria-label="Product pricing"
        //                         title="Product pricing"
        //                         className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        //                       >
        //                         Pricing
        //                       </a>
        //                     </li>
        //                     <li>
        //                       <a
        //                         href="/"
        //                         aria-label="About us"
        //                         title="About us"
        //                         className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        //                       >
        //                         About us
        //                       </a>
        //                     </li>
        //                     <li>
        //                       <a
        //                         href="/"
        //                         className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        //                         aria-label="Sign up"
        //                         title="Sign up"
        //                       >
        //                         Sign up
        //                       </a>
        //                     </li>
        //                   </ul>
        //                 </nav>
        //               </div>
        //             </div>
        //           )}
        //         </div>
        //       </div>
        //     </div>

        //   </div>
        // </div>

        <header className="relative z-40">
            <nav className={` ${navbar ? "shadow-md" : "" } fixed w-full bg-white`}>
                <div className="container m-auto px-6 md:px-12 lg:px-6">
                    <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
                        <div className="w-full flex justify-between lg:w-auto">
                            <Link href="/">
                                <a aria-label="logo">
                                    <img src="images/droomlogo.png" className="w-12" alt="droomwork" width="144" height="48" />
                                </a>
                            </Link>
                            

                            <button aria-label="humburger" id="hamburger" className="relative w-10 h-10 -mr-2 lg:hidden" onClick={handleClick}>
                                <div aria-hidden="true" id="line" className="inset-0 w-6 h-0.5 m-auto rounded bg-gray-500 transtion duration-300"></div>
                                <div aria-hidden="true" id="line2" className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-gray-500 transtion duration-300"></div>
                            </button>
                        </div>

                        <div className={`w-full ${isMenuOpen ? "block" : "hidden"} bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-auto lg:flex`}>
                            <div className="block w-full lg:items-center lg:flex">
                                <ul className="space-y-6 pb-6 tracking-wide font-medium text-gray-600 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
                                    
                                    {/* <li onClick={scrollTo}> */}
                                    <li>
                                        {/* <Link href="#">
                                            <a href="#" className="block md:px-3"> */}
                                                <span className="relative before:absolute before:block before:bottom-[-0.15rem] before:left-0 before:w-2/4 before:h-[1px] before:bg-[#F49038] before:-p-2 cursor-pointer ">Build</span>
                                            {/* </a>
                                        </Link> */}
                                    </li>
                                    <li>
                                        <Link href="https://jobs.droomwork.io/">
                                        <a className="block md:px-3">
                                            <span>Jobs</span>
                                        </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog/">
                                            <a className="block md:px-3">
                                                <span>Blog</span>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>

                                <ul className="border-t space-y-2 pt-2 lg:space-y-0 lg:space-x-2 lg:pt-0 lg:pl-2 lg:border-t-0 lg:border-l lg:items-center lg:flex">
                                    <li>
                                        <button className="inline-flex w-full lg:w-fit justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] border-2 border-solid border-[#001935]">
                                            <Link href="/developers">
                                                <a>
                                                <span className="block">
                                                    Apply for Jobs
                                                </span>
                                                </a>
                                            </Link>
                                        </button>
                                    </li>

                                    <li>
                                        <button className="inline-flex w-full lg:w-fit justify-center px-5 py-2 font-semibold bg-white text-[#001935] border-2 border-solid border-[#001935] hover:text-gray-100 transition-colors duration-200 transform hover:bg-[#001935] rounded-md ">
                                            <Link href="/recruiters">
                                                <a>
                                                    <span className="block">
                                                        Hire Developers
                                                    </span>
                                                </a>
                                            </Link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}




