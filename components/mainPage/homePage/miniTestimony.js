import React,{useState} from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'nuka-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { images } from 'next.config';

const MiniTestimony = () => {
    const[state, setState] = useState([
        {
            id: 1,
            name: 'Jean Miguel',
            company: 'Droomwork',
            buildContent: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
            imgFile:"https://media.istockphoto.com/photos/studio-portrait-of-elegant-adult-man-dark-background-picture-id923679012?k=20&m=923679012&s=612x612&w=0&h=xr8dTQzF7N6_Q8-66DnuM-SGoE0AuDjIEaKRWDOBcYE="
        },
        {
            id: 2,
            name: 'Michael Blake',
            company: 'Droomwork',
            buildContent: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
            imgFile:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        },
        {
            id: 3,
            name: 'Jean Miguel',
            company: 'Droomwork',
            buildContent: 'To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself',
            imgFile:"https://media.istockphoto.com/photos/studio-portrait-of-elegant-adult-man-dark-background-picture-id923679012?k=20&m=923679012&s=612x612&w=0&h=xr8dTQzF7N6_Q8-66DnuM-SGoE0AuDjIEaKRWDOBcYE="
        }
    ])
    return(
        <>
            <div className="pb-20">
            <div className="bg-white dark:bg-gray-800 w-full mx-auto p-8 flex justify-center">
                
                <div className="w-11/12 p-2 shadow-xl rounded-xl bg-black md:w-8/12 lg:w-6/12">
                    {/* <Carousel autoPlay="true" infiniteLoop="true" interval={3000}> */}
                    <AwesomeSlider infinite="true" mobileTouch="true" >
                    {state && state.map((items) => (
                        <div className="flex items-center md:items-start flex-col md:flex-row  items-center justify-center">
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
                    ))}
                    </AwesomeSlider>
                </div>
            </div>
            </div>
        </>
    )
}

export default MiniTestimony 