import React, {useState} from 'react';
import Carousel from 'nuka-carousel';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import SectionTitle from './title';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SuccessCase = () => {
    const[state, setState] = useState([
        {
            id: 1,
            type: 'Real Estate',
            buildTopic: 'Digitalizing Company Operations',
            stleTopic: 'Real Estate',
            buildContent: 'Digitalization of all companies operational records to facilitate for more efficient workflow amongst department, promote a remote first work culture and enable data visualization and analytics for smarter business decisions.',
            imgFile:"images/Blue Illustration Laptop Hello Circle Sticker.png",
            country: "NGA",
            company: "God Made Homes Luxury"
        },
        {
            id: 2,
            type: 'Retail and E-commerce',
            buildTopic: 'Digital Transformation of Sales Funnel',
            stleTopic: 'Retail and E-commerce',
            buildContent: 'Leveraging tech and the power of multiple user channels to reach out to clients through AI powered intelligent systems to accelerate sales.',
            imgFile:"images/nativeFood.png",
            country: "Germany",
            company: "Nuthoop"
        },
        {
            id: 3,
            type: 'Fintech',
            buildTopic: 'POS field Officers Tracking',
            stleTopic: 'Fintech',
            buildContent: 'Track locations, time to visit, work updates of all POS field officers across all bank branches and location',
            imgFile:"images/pos.png",
            country: "NGA",
            company: "Zenith Bank"
        }
    ])

    
  return (
    <>

    <div className="pb-20">
        <SectionTitle 
            title="Our Portfolio"
        />
        <div className="container m-auto px-6 md:px-12 lg:px-6">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // spaceBetween={50}
                // slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                   }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                loop={true}
            >
           {/* <Carousel> */}
            {state && state.map((items) => (
                <SwiperSlide key={items.id}>
                <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col" key={items.id}>
                <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                        <div className="flex flex-col  items-start mb-6 text-center md:mb-16 lg:mb-6">
                            <p
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-[#001935]"
                            >
                            {items.type}
                            </p>
                        </div>
                        <p className="mb-5 text-left font-sans font-bold tracking-tight text-gray-900 sm:text-4xl md:text-left">
                            {items.buildTopic}
                            <br className="hidden md:block" />
                            {/* {items.stleTopic} */}
                        </p>
                        <p className="text-left mb-5 text-base text-gray-700 md:text-lg md:text-left">
                            {items.buildContent} in <span className="font-semibold"> {items.country} </span>.
                        </p>
                        <p className="text-left mb-5 text-base text-gray-700 md:text-lg md:text-left">
                            <span className="text-[#F49038]"> 
                            {items.company} 
                            {/* <FontAwesomeIcon icon={faAngleRight} beat size="sm"/> */}
                            </span>
                        </p>
                        
                    </div>
                </div>
                <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src={items.imgFile}
                    alt=""
                    />
                </div>
                </div>
            </SwiperSlide>
            ))
            }
           {/* </Carousel>  */}
           </Swiper>
        </div>
    </div>
    </>
  )
}

export default SuccessCase