import React,{useState} from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'nuka-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { images } from 'next.config';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, variants } from 'framer-motion';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';



const containerVariant = {
    hidden: {
        y: 20,
        opacity: 0,
    },

    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring", bounce: 0.4, duration: 3, delay:0.3
        }
    }
}

const MiniTestimony = () => {
    const[state, setState] = useState([
        {
            id: 1,
            name: 'Mr. Zino',
            company: 'Manager Pfxnet',
            buildContent: 'We had our platform, pfxnet Nigerian foremost property monoline profit system built by droomwork from ground up. They are excellent in delivery and we can recommend them to anyone.',
            imgFile:"images/dotunBrown.jpg"
        },
        {
            id: 2,
            name: 'Mr. Chris',
            company: 'Nuthoop',
            buildContent: 'I have had the opportunity of working with droomwork limited in the development of our web portal. The development team has been on point in terms of meeting our companys acceptance criteria and delivering value. I reckon they are fast growing indigenous software company to work with',
            imgFile:"images/IMG-20220927-WA0011.jpg"
        }
    ])
    return(
        <>
            <div className="pb-20">
            <motion.div className="bg-white dark:bg-gray-800 w-full mx-auto p-8 flex justify-center"
            initial={"hidden"}
            whileInView={"visible"}
            variants={containerVariant}
            viewport={{once:true, amount:0.5}}
            // transition={{staggerChildren: 0.5}}
            >
                
                <div className="w-11/12 p-2 shadow-xl rounded-xl bg-black md:w-8/12 lg:w-6/12">
                    {/* <Carousel autoPlay="true" infiniteLoop="true" interval={3000}> */}
                    <Swiper 
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        // spaceBetween={50}
                        // slidesPerView={3}
                        // navigation
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 7000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        loop={true} 
                    >
                    {state && state.map((items) => (
                        <SwiperSlide key={items.id}>
                            <div className="flex md:items-start flex-col md:flex-row  items-center justify-center">
                                <div>
                                    <a href="#" className="block relative">
                                        <img alt="profil" src={items.imgFile} className="mx-auto object-cover rounded-full h-24 w-24 "/>
                                    </a>
                                    <div className="flex flex-col mt-1.5 items-center justify-center">
                                        <span className="font-semibold text-[#f49038] mr-2 text-lg">
                                            {items.name}
                                        </span>
                                        {/* <span className="text-gray-400 text-xl font-light">
                                            /
                                        </span> */}
                                        <span className="text-gray-300 text-md mr-2">
                                            {items.company}
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full px-4 py-1.5 lg:px-0 lg:py-0 md:w-4/6">
                                    <p className="text-gray-300 dark:text-white w-full md:w-5/6 m-auto text-left text-lg md:text-xl">
                                        <span className="font-bold text-[#f49038]">
                                            “
                                        </span>
                                        {items.buildContent}
                                        <span className="font-bold text-[#f49038]">
                                            ”
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </motion.div>
            </div>
        </>
    )
}

export default MiniTestimony 