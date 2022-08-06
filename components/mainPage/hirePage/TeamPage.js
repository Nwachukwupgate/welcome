import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Keyboard, Scrollbar, Zoom , Pagination } from "swiper";
import 'swiper/css';
// import 'swiper/css/effect-fade';
// // import 'swiper/swiper.min.css';
// import 'swiper/modules/autoplay/autoplay.min.css';
// import 'swiper/modules/keyboard/keyboard.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';
// import 'swiper/modules/zoom/zoom.min.css';
// import '@ionic/react/css/ionic-swiper.css';


SwiperCore.use([Pagination, Autoplay]);

const TeamPage = () => {

    const swiperRef = React.useRef(SwiperCore);
    const onInit = (SwiperCore)=> {
        swiperRef.current = Swiper;
    };
    const handleMouseEnter = () => {
        if (swiperRef.current) swiperRef.current.autoplay.start();
    };
    const handleMouseLeave = () => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
    };

    const[state, setState] = useState([
        {
            id: 1,
            availability: 'Available',
            name: 'David Johnson',
            about: 'Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI. error alias, adipisci rem similique, at omnis eligendi optio',
            profession: 'UI/UX designer',
            imgFile:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            country: "California",
            work: 'Konga',
            language : [{
                    id: 1,
                    name: 'React'
                }, {
                    id: 2,
                    name: 'Angular'
                }, {
                    id: 3,
                    name: 'Swelte'
                }
            ]
        },
        {
            id: 2,
            availability: 'Available',
            name: 'David Johnson',
            about: 'Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI. error alias, adipisci rem similique, at omnis eligendi optio',
            profession: 'UI/UX designer',
            imgFile:"https://techeconomy.ng/wp-content/uploads/2021/05/HUAWEI-Developer-programme-1.jpg",
            country: "Nigeria",
            work: 'Konga',
            language : [{
                    id: 1,
                    name: 'React'
                }, {
                    id: 2,
                    name: 'Angular'
                }, {
                    id: 3,
                    name: 'Swelte'
                }
            ]
        },
        {
            id: 3,
            availability: 'Available',
            name: 'Emmanuel Dafe',
            about: 'Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI. error alias, adipisci rem similique, at omnis eligendi optio',
            profession: 'Mobile App',
            imgFile:"https://thumbs.dreamstime.com/b/software-developer-smiling-young-working-computer-54668839.jpg",
            country: "UK",
            work: 'Jumia',
            language : [{
                    id: 1,
                    name: 'React'
                }, {
                    id: 2,
                    name: 'Angular'
                }, {
                    id: 3,
                    name: 'Swelte'
                }
            ]
        }
    ])
  return (
    <>

        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span class="text-blue-500">Freelancers</span></h1>
                
                <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
                
                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <div class="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <Swiper modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
                            autoplay={true}
                            keyboard={true}
                            pagination={true}
                            scrollbar={true}
                            zoom={true}
                            loop={true}
                        >
                        {state && state.map((items) => ( 
                            <SwiperSlide key={items.id}>
                            <div class="flex flex-col sm:-mx-4 sm:flex-row">
                                <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src={items.imgFile} alt="" />

                                <div class="mt-4 sm:mx-4 sm:mt-0">
                                    <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">{items.name}</h1>
                                    
                                    <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{items.profession}</p>
                                </div>
                            </div>

                            <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{items.about}</p>
                            
                            <div class="flex mt-4 -mx-2">
                            {items.language.map((item) => (
                                <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2" key={item.id}>
                                    <span>{item.name}</span>
                                </a>
                            ))}
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>

                    <div class="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Amelia. Anderson</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lead Developer</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                        <div class="flex mt-4 -mx-2">
                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>React</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Javascript</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>GoLang</span>
                            </a>
                        </div>
                    </div>

                    <div class="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Olivia Wathan</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lead designer</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                        <div class="flex mt-4 -mx-2">
                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>React</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Javascript</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>GoLang</span>
                            </a>
                        </div>
                    </div>

                    <div class="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">John Doe</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full stack developer</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                        <div class="flex mt-4 -mx-2">
                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>React</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Javascript</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>GoLang</span>
                            </a>
                        </div>
                    </div>

                    <div class="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Olivia Wathan</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lead designer</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                        <div class="flex mt-4 -mx-2">
                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>React</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Javascript</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>GoLang</span>
                            </a>
                        </div>
                    </div>

                    <div class="px-12 py-8 bg-[rgba(255, 255, 255, 0.3)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors duration-200 transform border cursor-pointer rounded-2xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div class="flex flex-col sm:-mx-4 sm:flex-row">
                            <img class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                            <div class="mt-4 sm:mx-4 sm:mt-0">
                                <h1 class="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">John Doe</h1>
                                
                                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full stack developer</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                        <div class="flex mt-4 -mx-2">
                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>React</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>Javascript</span>
                            </a>

                            <a href="#" class="mx-1 text-gray-600 border border-solid border-gray-300  dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white py-0.5 rounded-lg px-2">
                                <span>GoLang</span>
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