import React, {useState} from 'react'
import Carousel from 'nuka-carousel';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Scrollbar, Zoom , Pagination } from "swiper";
import 'swiper/css';
import Link from 'next/link';

function DevHero() {
    SwiperCore.use([Pagination, Autoplay]);

    const swiperRef = React.useRef(SwiperCore);
    const onInit = (SwiperCore)=> {
        swiperRef.current = Swiper;
    };

    const[state, setState] = useState([
        {
            id: 1,
            availability: 'Available',
            name: 'Hassan Javed',
            about: 'A talented, IT professional with proven skills in cutting-edge, world-class environments.',
            profession: 'SQA Engineer',
            imgFile:"images/developers/maheed2.png",
            country: "Pakistian",
            work: 'FutureNow Technologies',
        },
        {
            id: 2,
            availability: 'Available',
            name: 'Oluwamayowa Fadairo',
            about: 'Node and Laravel developer, experienced in leading development of applications.',
            profession: 'Backend Engineer',
            imgFile:"images/developers/mayowa2.png",
            country: "Nigeria",
            work: 'Printiki',
        },
        {
            id: 3,
            availability: 'Available',
            name: 'Foresight John',
            about: 'Open-minded individual looking to utilize my technical skill set with companies that employ unique individuals and promote positive principles.',
            profession: 'Mobile-App Developer',
            imgFile:"images/developers/foresight.png",
            country: "Romania",
            work: 'Beez',
        }
    ])
  return (
    <>
        <div className="pt-20 pb-24 lg:pt-[7rem] mx-auto">
            <div className="lg:flex lg:items-center lg:space-x-14 mx-10">
                <div className="text-center flex flex-col items-center space-y-4 lg:items-start lg:text-left lg:space-y-10 lg:basis-3/5">
                    <div>
                    <p className="text-[#F49038] text-lg ml-2 mb-[0.8rem] font-medium">For Developers</p>
                    <h1 className="font-bold text-gray-900 text-4xl md:text-5xl md:leading-tight">
                        Apply To Work Remotely On Global Contracts and Full Time Jobs
                    </h1>
                    </div>

                    <p className="text-gray-600 lg:w-11/12">
                        Join the most ambitious and talented tech talents to get matched with top contract jobs. Apply once to us, so we take the hassle of job scouting off you and get top companies wanting your technical skills.
                    </p>
                    <button className="inline-flex w-fit justify-center px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-[#001935] rounded-md hover:bg-white hover:text-[#001935] hover:border-2 hover:border-solid hover:border-[#001935]">
                    <Link href="/register">
                        <a>
                        <span className="block">
                            Apply now
                        </span>
                        </a>
                    </Link>
                    </button>
                    <p className="text-gray-600">Recruiter? <span className="text-[#F49038]"><Link href="/recruiters"><a>HIRE DEVELOPERS</a></Link></span></p>
                </div>

                
                    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-lg lg:basis-2/5">
                    {/* <Carousel autoplay={true} enableKeyboardControls={true} autoplayReverse={true} wrapAround={true} pauseOnHover={true}> */}
                    <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                            }}
                        
                        keyboard={true}
                        pagination={true}
                        scrollbar={true}
                        zoom={true}
                        loop={true}
                    >
                        {state && state.map((items) => (
                            <SwiperSlide key={items.id}>
                            <div>

                            <div className="h-64">
                            <img className="w-full h-full" src={items.imgFile} alt="Developer" />
                            </div>
                            
                            <div className="flex items-center px-6 py-3 bg-gray-900">
                                {/* <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"/>
                                </svg> */}

                                <h1 className="mx-3 text-lg font-semibold text-white">{items.availability}</h1>
                            </div>

                            <div className="px-6 py-4">
                                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{items.name}</h1>

                                <p className="py-2 text-gray-700 dark:text-gray-400">{items.about}</p>
                                
                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 11H10V13H14V11Z"/><path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"/>
                                    </svg>

                                    <h1 className="px-2 text-sm">{items.profession}</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"/><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"/>
                                    </svg>

                                    <h1 className="px-2 text-sm">{items.country}</h1>
                                </div>

                                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"/>
                                    </svg>
                                    
                                    <h1 className="px-2 text-sm">Previously at: <span className="text-[#F49038]">{items.work}</span> </h1>
                                </div>
                            </div>
                            </div>
                            </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    
                    {/* </Carousel> */}
                    </div>
                    
            </div>
        </div>
    </>
  )
}

export default DevHero