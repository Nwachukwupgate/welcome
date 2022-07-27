import React, {useState} from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'nuka-carousel';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import SectionTitle from './title';

const SuccessCase = () => {
    const[state, setState] = useState([
        {
            id: 1,
            type: 'custom build',
            buildTopic: 'Fixing for marketing',
            stleTopic: 'for for a saas company',
            buildContent: 'play is a free software company, tha hav jdhjd jsjdb hjdgshb hbdshcb bhsbh bhbs hschbhgcb bhbhsd bhbsh sdbchdn hghds jhsjm',
            imgFile:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
            country: "USA"
        },
        {
            id: 2,
            type: 'Quick Fix',
            buildTopic: 'Fixing for marketing',
            stleTopic: 'for for a saas company',
            buildContent: 'play is a free software company, tha hav jdhjd jsjdb hjdgshb hbdshcb bhsbh bhbs hschbhgcb bhbhsd bhbsh sdbchdn hghds jhsjm',
            imgFile:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
            country: "Nigeria"
        },
        {
            id: 3,
            type: 'Staff Aug',
            buildTopic: 'Fixing for marketing',
            stleTopic: 'for for a saas company',
            buildContent: 'play is a free software company, tha hav jdhjd jsjdb hjdgshb hbdshcb bhsbh bhbs hschbhgcb bhbhsd bhbsh sdbchdn hghds jhsjm',
            imgFile:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
            country: "UK"
        }
    ])

    
  return (
    <>

    <div className="pb-20">
        <SectionTitle 
            title="Success Cases"
        />
        <div className="container m-auto px-6 md:px-12 lg:px-6">
           <Carousel>
            {state && state.map((items) => (
                <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col" key={items.id}>
                <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                        <div className="flex flex-col text-left items-start mb-6 text-center md:mb-16 lg:mb-6">
                            <p
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-[#001935]"
                            >
                            {items.type}
                            </p>
                        </div>
                        <p className="mb-5 text-left font-sans font-bold tracking-tight text-gray-900 sm:text-4xl md:text-left">
                            {items.buildTopic}
                            <br className="hidden md:block" />
                            {items.stleTopic}
                        </p>
                        <p className="text-left mb-5 text-base text-gray-700 md:text-lg md:text-left">
                            {items.buildContent} in <span className="font-semibold"> {items.country} </span>.
                        </p>
                        <p className="text-left mb-5 text-base text-gray-700 md:text-lg md:text-left">
                            <span className="text-[#F49038]"> 
                            See more <FontAwesomeIcon icon={faAngleRight} beat size="sm"/>
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
            ))
            }
           </Carousel> 
        </div>
    </div>
    </>
  )
}

export default SuccessCase