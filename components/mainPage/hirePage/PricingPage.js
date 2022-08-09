import { data } from 'autoprefixer'
import React,{useState, useEffect} from 'react'

if(process.env.APP_env === 'development') {
    var api_origin = 'https://api.droomwork.io'
} else {
    api_origin = 'http://api.droomwork.io'
// api_origin = 'http://localhost:3000'
}

if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    const TokenAuthless = urlParams.get('enter')
if(TokenAuthless){localStorage.setItem('authless', JSON.stringify(TokenAuthless))}
    var Token = JSON.parse(localStorage.getItem("authless"))
}

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    const [location, setLocation] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [err, setErr] = useState(null);

    useEffect(() => {
        fetch(`${api_origin}/api/v1/all/getLocationByIp`, {
            headers:{
            'Accept':'application/json',
            'Authorization': `Bearer ${Token}`,
            'Content-type':'application/json',
            'Access-Control-Allow-Origin':'*'
            }
        })
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Server responds with error!")
                }
                return res.json()
            })
            .then(data => {
                setLocation(data)
                console.log("this is the location", location)
                setIsLoaded(true)
            },
                err => {
                    setErr(err)
                    setIsLoaded(true)
                }
            )
    }, [])

  return (
    <>

        <div className="mx-8 flex flex-wrap">
            <div className="w-full">
            <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
            >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                            ? "text-gray-100 bg-" + color + " "
                            : "text-" + color + "-600 bg-white")
                        }
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                >
                    Profile
                </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                            ? "text-gray-100 bg-" + color + " "
                            : "text-" + color + "-600 bg-white")
                        }
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                >
                    Settings
                </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                        ? "text-gray-100 bg-" + color + " "
                        : "text-" + color + "-600 bg-white")
                    }
                    onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                >
                    Options
                </a>
                </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                    <div class="bg-gray-100">
                        <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
                            <div class="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
                                <div class="relative md:col-span-1 group lg:w-[32%]">
                                    <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                                    <div class="relative p-6 space-y-6">
                                        <h3 class="text-3xl text-gray-700 font-semibold text-center">Monthly</h3>
                                        <div class="relative flex justify-around">
                                            <div class="flex">
                                                <span class="-ml-6 mt-2 text-3xl text-cyan-500 font-bold">$</span>
                                                <span class="text-8xl text-gray-800 font-bold leading-0">19</span>
                                            </div>
                                            <span class="absolute right-9 bottom-2 text-xl text-cyan-500 font-bold">/ Month</span>
                                        </div>
                                        <ul role="list" class="w-max space-y-4 pb-6 m-auto text-gray-600">
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>First premium advantage</span>
                                            </li>
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>Second premium advantage</span>
                                            </li>
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>Third advantage</span>
                                            </li>
                                        </ul>
                                        <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl transition bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-sky-500">
                                            <span class="text-white font-semibold">
                                                Start plan
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div class="relative row-start-1 group md:col-span-2 lg:w-[36%]">
                                    <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                                    <div class="relative p-6 space-y-6">
                                        <h3 class="text-3xl text-gray-700 font-semibold text-center">Annual</h3>
                                        <div class="overflow-hidden">
                                            <div class="-mr-20 flex items-end justify-center">
                                                <div class="flex">
                                                    <span class="-ml-6 mt-2 text-3xl text-cyan-500 font-bold">$</span>
                                                    <span class="text-8xl text-gray-800 font-bold leading-0">15</span>
                                                </div>
                                                <div class="mb-2">
                                                    <span class="block text-xl font-bold">.56</span>
                                                    <span class="block text-xl text-cyan-500 font-bold">/ Month</span>
                                                </div>
                                            </div>
                                            <div class="text-center text-2xl font-medium">
                                                <span class="text-gray-400 line-through">$234</span>
                                                <span class="text-gray-700 font-semibold">$190</span>
                                            </div>
                                            <span class="block uppercase text-xs text-cyan-500 text-center">BILLED YEARLY</span>
                                            <span class="block w-max mt-4 m-auto px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 text-sm font-medium text-yellow-900">1 Discount applied</span>
                                        </div>
                                        <ul role="list" class="w-max space-y-4 pb-6 m-auto text-gray-600">
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>First premium advantage</span>
                                            </li>
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>Second premium advantage</span>
                                            </li>
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>Third advantage</span>
                                            </li>
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>Fourth organizations advantage</span>
                                            </li>
                                        </ul>
                                        <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl transition bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:bg-sky-500">
                                            <span class="text-white font-semibold">
                                                Start plan
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div class="relative md:col-span-1 group lg:w-[32%]">
                                    <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                                    <div class="relative p-6 space-y-6">
                                        <h3 class="text-3xl text-gray-700 font-semibold text-center">Free</h3>
                                        <div class="relative flex justify-around">
                                            <div class="flex">
                                                <span class="-ml-2 mt-2 text-3xl text-cyan-500 font-bold">$</span>
                                                <span class="text-8xl text-gray-800 font-bold leading-0">0</span>
                                            </div>
                                        </div>
                                        <ul role="list" class="w-max space-y-4 pb-6 m-auto text-gray-600">
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>First premium advantage</span>
                                            </li>
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>Second premium advantage</span>
                                            </li>
                                            <li class="space-x-2">
                                                <span class="text-cyan-500 font-semibold">&check;</span>
                                                <span>Third advantage</span>
                                            </li>
                                        </ul>
                                        <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl bg-cyan-100 transition hover:bg-cyan-200 active:bg-cyan-300 focus:bg-cyan-200">
                                            <span class="text-cyan-700 font-semibold">
                                                Create free account
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                                         
                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate one-to-one
                        customer service with robust ideas.
                        <br />
                        <br />
                        Dynamically innovate resource-leveling customer service for
                        state of the art customer service.
                    </p>
                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables for
                        real-time schemas.
                        <br />
                        <br /> Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    </>
  )
}

// export default PricingPage;

export default function PricingPage() {
    return (
      <>
        <div className='container mx-auto'>
        <Tabs color="[#001935]" />
        </div>
      </>
    );
  }