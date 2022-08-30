import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Scrollbar, Zoom , Pagination } from "swiper";
import 'swiper/css';
import Link from 'next/link';
// import 'swiper/css/effect-fade';
// // import 'swiper/swiper.min.css';
// import 'swiper/modules/autoplay/autoplay.min.css';
// import 'swiper/modules/keyboard/keyboard.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';
// import 'swiper/modules/zoom/zoom.min.css';
// import '@ionic/react/css/ionic-swiper.css';




const TeamPage = () => {

    SwiperCore.use([Pagination, Autoplay]);

    const swiperRef = React.useRef(SwiperCore);
    const onInit = (SwiperCore)=> {
        swiperRef.current = Swiper;
    };
   

    const[state, setState] = useState([
        {
            id: 1,
            availability: 'Available',
            name: 'Raphael Donance',
            about: 'I am a frontend engineer working in a team of experienced engineers employing diverse tools, modern frontend technologies and best practices to build performant and accessible web interface.',
            profession: 'Frontend Developer',
            imgFile:"images/developers/rapheal.jpg",
            country: "California",
            work: 'Konga',
            language : [{
                    id: 1,
                    name: 'React'
                }, {
                    id: 2,
                    name: 'SASS'
                }, {
                    id: 3,
                    name: 'Next'
                }
            ]
        },
        {
            id: 2,
            availability: 'Available',
            name: 'Rosemary Elefue',
            about: "I'm a Frontend Developer, well skilled in problem solving and a Technophile. I don't only do the boring stuff, I make your page rank high in Google. Yeah, I'm also an SEO Expert.",
            profession: 'Frontend developer',
            imgFile:"images/developers/1651948530937.jpeg",
            country: "Nigeria",
            work: 'Konga',
            language : [{
                    id: 1,
                    name: 'Java'
                }, {
                    id: 2,
                    name: 'Javascript'
                }, {
                    id: 3,
                    name: 'React'
                }
            ]
        },
        {
            id: 3,
            availability: 'Available',
            name: 'Luqman Bello ',
            about: 'Tech savvy dev operations engineer  with solid background in software engineering paired with in-depth knowledge of sql and database.',
            profession: 'Devop Engineers',
            imgFile:"images/developers/IMG-20220825-WA0016.jpg",
            country: "UK",
            work: 'Jumia',
            language : [{
                    id: 1,
                    name: 'AWS'
                }, {
                    id: 2,
                    name: 'Azure'
                }, {
                    id: 3,
                    name: 'Cloud computing'
                }
            ]
        }
    ])
  return (
    <>

        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span className="">Talents</span></h1>
                
                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    We have taken the heavy loads off you by sourcing, vetting & profiling the top talents around the globe. Now, you can build your dream project.
                </p>
                
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div className="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-[#001935] dark:border-gray-700 dark:hover:border-transparent">
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
                            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                                <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={items.imgFile} alt="" />

                                <div className="mt-4 sm:mx-4 sm:mt-0">
                                    <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{items.name}</h1>
                                    
                                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{items.profession}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{items.about}</p>
                            
                            <div className="flex mt-4 -mx-2">
                            {items.language.map((item) => (
                                <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2" key={item.id}>
                                    <span>{item.name}</span>
                                </a>
                            ))}
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>

                    <div className="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-[#001935] dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="images/developers/emmanuel.jpeg" alt="developer" />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Emmanuel Okoh</h1>
                        
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Mobile app Developer</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">I have over 5+ years of experience in providing IT Product development and IT Services. Although recently started on Freelancer, In the last 5 years, I have successfully delivered over 200+ projects in different forums.</p>

                        <div className="flex mt-4 -mx-2">
                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Flutter</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Laravel</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Firebase</span>
                            </a>
                        </div>
                    </div>

                    <div className="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-[#001935] dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="images/developers/haveed.jpeg" alt="freelancers" />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Hassan Javed</h1>
                                
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">SQA Engineer</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">A talented, reliable IT professional with proven skills in cutting-edge, world-class environments. Productive in both self-managed and team-based projects. A quick learner with strong analytical, organization, and problem-solving skills.</p>

                        <div className="flex flex-wrap mt-4 -mx-2">
                            <Link href="/recruiters">
                            <a className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Selenium</span>
                            </a>
                            </Link>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>JMeter 2.7</span>
                            </a>
                        </div>
                    </div>

                    <div className="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-[#001935] dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="images/developers/mayowa.jpeg" alt="developer" />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Oluwamayowa Fadairo</h1>
                                
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">NodeJs developer</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">A software engineer with experience leading the design and development of test-driven, scalable, and maintainable software applications in NodeJs and Laravel.</p>

                        <div className="flex mt-4 -mx-2">
                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Typescript</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>AWS</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>MySql</span>
                            </a>
                        </div>
                    </div>

                    <div className="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-[#001935] dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="images/developers/ali.jpeg" alt="" />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Ali Hussnain</h1>
                                
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Backend Developer</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">I am a creative engineer with over 4 years of experience who loves to build slick products that work out perfectly I Can build WebApps, REST APIs, websites, integrations, and micro-services to help move your business forward.</p>

                        <div className="flex mt-4 -mx-2">
                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>JavaScript</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Php</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>GraphQL</span>
                            </a>
                        </div>
                    </div>

                    <div className="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-[#001935] dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex flex-col sm:-mx-4 sm:flex-row">
                            <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="images/developers/otobong.jpg" alt="" />

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Otobong Peter</h1>
                                
                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Blockchain Developer</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Building products that scale and also deeply passionate about communities and building solutions that solve critical problems across the African continent.</p>

                        <div className="flex mt-4 -mx-2">
                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Solidity</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Javascript</span>
                            </a>

                            <a href="#" className="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Python</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TeamPage