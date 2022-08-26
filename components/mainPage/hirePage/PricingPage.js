import React,{useState, useEffect} from 'react';
import myFetch from 'helpers/useFetch';
import EasyHTTP from 'helpers/easyHttp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const simpleHttp =  new EasyHTTP()

if(process.env.APP_env === 'development') {
    var api_origin = 'http://127.0.0.1:3333'
} else {
    api_origin = 'https://api.droomwork.io'
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
    const [isPending, setIsPending] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null);
    const [price, setPrice] = useState(null)

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('location'));
        if (items) {
            setLocation(items);
        }
    }, []);
    console.log("this is the location", location)

    const {data: stackData, isPending: stackLoading, error: stackError} = myFetch(`${api_origin}/api/v1/all/getStacks`)

    // useEffect(() =>{
    //     async function fetchData() {
    //         const res = await simpleHttp.get(`/api/v1/all/getPrice/${location}/1`)
        
    //         if(res.status == true){
    //             setPrice(res.data)
    //             setIsLoading(false)
    //         } else  {
    //             toast.error(res.error.message)
    //         }
    //     }
    //     fetchData();
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
          await fetch(`${api_origin}/api/v1/all/getPrice/${location}/1`)
            .then((res) => res.json())
            .then((res) => {
                setPrice(res.data)
                setIsLoading(false)
            })
            .catch((e) => toast.error(e.message));
        };
    
        const timer = setTimeout(() => {
          fetchData();
        }, 8000);
    
        return () => clearTimeout(timer);
      }, [location]);

    // console.log("this is the Stackdata", stackData)

    const handleClick = async (id) => {
        const res = await simpleHttp.get(`/api/v1/all/getPrice/${location}/${id}`)
        if(res.status == true) {
            setPrice(res.data)
            setIsPending(false)
        } else{
            toast.error(res.error.message)
        }
    }
    // console.log("the price data", price)


  return (
    <>
    <ToastContainer />

        <div className="flex flex-wrap">
        <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
            Pricing Table
            </span>
            <h2
                className="
                font-bold
                text-3xl
                sm:text-4xl
                md:text-[40px]
                text-dark
                mb-4
                "
                >
                Our Pricing Plan
            </h2>
            <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
            </p>
            </div>
        </div>
        </div>

        <div className="mx-8 flex flex-wrap">
            <div className="w-full">
            <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
            >
                {stackData && stackData.data.map(items => (
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={items.id}> 
                        <span
                            className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === (items.id)
                                    ? "text-gray-100 bg-" + color + " "
                                    : "text-" + color + "-600 bg-white")
                                }
                            onClick={() => {
                            setOpenTab(items.id);
                             handleClick(items.id);
                            }}
                            data-toggle="tab"
                            // href={items.id}
                            role="tablist"
                        >
                            {items.name}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                    <div id="link1">
                        <section
                        className="
                        bg-white
                        pt-1
                        lg:pt-[20px]
                        pb-12
                        lg:pb-[90px]
                        relative
                        z-20
                        overflow-hidden
                        "
                        >
                        

                            {isLoading ? (
                                    <div>Loading</div>
                                ) : (
                                    <div className="">
                                        <div className="flex flex-wrap justify-center -mx-4">
                                            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                                                <div
                                                className="
                                                bg-white
                                                rounded-xl
                                                relative
                                                z-10
                                                overflow-hidden
                                                border border-primary border-opacity-20
                                                shadow-pricing
                                                py-10
                                                px-8
                                                sm:p-12
                                                lg:py-10 lg:px-6
                                                xl:p-12
                                                mb-10
                                                "
                                                >
                                                <span className="text-primary font-semibold text-lg block mb-4">
                                                {/* {price[0].seniority} */}
                                                Top Freelencer
                                                </span>
                                                <h2 className="font-bold text-dark mb-5 text-[36px]">
                                                    ${price[0].lower_price} - ${price[0].higher_price}
                                                    <span className="text-base text-body-color font-medium">
                                                    / hr
                                                    </span>
                                                </h2>
                                                {/* <p
                                                    className="
                                                    text-base text-body-color
                                                    pb-8
                                                    mb-8
                                                    border-b border-[#F2F2F2]
                                                    "
                                                    >
                                                    Perfect for using in a personal website or a client project.
                                                </p> */}
                                                <div className="mb-7">
                                                <ul className="list-disc text-base text-body-color leading-loose mb-1">
                                                    <li>1-3 years of professional experience</li>
                                                    <li> Writes code with at least one programming language</li>
                                                    <li> Good knowledge of how softwares work on the web</li>

                                                    <li> Top Individual Freelancer</li>
                                                </ul>
                                               
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="
                                                    w-full
                                                    block
                                                    text-base
                                                    font-semibold
                                                    text-primary
                                                    bg-transparent
                                                    border border-[#D4DEFF]
                                                    rounded-md
                                                    text-center
                                                    p-4
                                                    hover:text-white hover:bg-primary hover:border-primary
                                                    transition
                                                    "
                                                    >
                                                Hire Top Freelancers
                                                </a>
                                                <div>
                                                    <span className="absolute right-0 top-7 z-[-1]">
                                                        <svg
                                                            width="77"
                                                            height="172"
                                                            viewBox="0 0 77 172"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                                            <defs>
                                                            <linearGradient
                                                                id="paint0_linear"
                                                                x1="86"
                                                                y1="0"
                                                                x2="86"
                                                                y2="172"
                                                                gradientUnits="userSpaceOnUse"
                                                                >
                                                                <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                                <stop
                                                                    offset="1"
                                                                    stop-color="#C4C4C4"
                                                                    stop-opacity="0"
                                                                    />
                                                            </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className="absolute right-4 top-4 z-[-1]">
                                                        <svg
                                                            width="41"
                                                            height="89"
                                                            viewBox="0 0 41 89"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            <circle
                                                            cx="38.9138"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="1.42021"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 1.42021)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="1.4202"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 1.4202)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="1.42019"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 1.42019)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="1.4202"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 1.4202)"
                                                            fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                                                <div
                                                className="
                                                bg-white
                                                rounded-xl
                                                relative
                                                z-10
                                                overflow-hidden
                                                border border-primary border-opacity-20
                                                shadow-pricing
                                                py-10
                                                px-8
                                                sm:p-12
                                                lg:py-10 lg:px-6
                                                xl:p-12
                                                mb-10
                                                "
                                                >
                                                <span className="text-primary font-semibold text-lg block mb-4">
                                                {/* {price[1].seniority} */}
                                                Expert Freelancer
                                                </span>
                                                <h2 className="font-bold text-dark mb-5 text-[36px]">
                                                ${price[1].lower_price} - ${price[1].higher_price}
                                                    <span className="text-base text-body-color font-medium">
                                                    / hr
                                                    </span>
                                                </h2>
                                        
                                                <div className="mb-7">
                                                    
                                                <ul className="list-disc text-base text-body-color leading-loose mb-1">
                                                    <li>4-6 years of professional experience</li>
                                                    <li>Writes code with several programming languages & technologies</li>
                                                    <li>Knows industry best practices</li>
                                                    <li>Can relate with business situations</li>
                                                    <li>Can mentor junior developers</li>
                                                </ul>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="
                                                    w-full
                                                    block
                                                    text-base
                                                    font-semibold
                                                    text-black
                                                    bg-primary
                                                    border border-primary
                                                    rounded-md
                                                    text-center
                                                    p-4
                                                    hover:bg-opacity-90
                                                    transition
                                                    "
                                                    >
                                                Hire Expert Freelancers
                                                </a>
                                                <div>
                                                    <span className="absolute right-0 top-7 z-[-1]">
                                                        <svg
                                                            width="77"
                                                            height="172"
                                                            viewBox="0 0 77 172"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                                            <defs>
                                                            <linearGradient
                                                                id="paint0_linear"
                                                                x1="86"
                                                                y1="0"
                                                                x2="86"
                                                                y2="172"
                                                                gradientUnits="userSpaceOnUse"
                                                                >
                                                                <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                                <stop
                                                                    offset="1"
                                                                    stop-color="#C4C4C4"
                                                                    stop-opacity="0"
                                                                    />
                                                            </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className="absolute right-4 top-4 z-[-1]">
                                                        <svg
                                                            width="41"
                                                            height="89"
                                                            viewBox="0 0 41 89"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            <circle
                                                            cx="38.9138"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="1.42021"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 1.42021)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="1.4202"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 1.4202)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="1.42019"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 1.42019)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="1.4202"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 1.4202)"
                                                            fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                                                <div
                                                className="
                                                bg-white
                                                rounded-xl
                                                relative
                                                z-10
                                                overflow-hidden
                                                border border-primary border-opacity-20
                                                shadow-pricing
                                                py-10
                                                px-8
                                                sm:p-12
                                                lg:py-10 lg:px-6
                                                xl:p-12
                                                mb-10
                                                "
                                                >
                                                <span className="text-primary font-semibold text-lg block mb-4">
                                                {/* {price[2].seniority} */}
                                                Tech Lead Freelancer
                                                </span>
                                                <h2 className="font-bold text-dark mb-5 text-[42px]">
                                                ${price[2].lower_price} - ${price[2].higher_price}
                                                    <span className="text-base text-body-color font-medium">
                                                    / hr
                                                    </span>
                                                </h2>
                                            
                                                <div className="mb-7">
                                                   
                                                <ul className="list-disc text-base text-body-color leading-loose mb-1">
                                                    <li>7-10+  years of professional experience</li>
                                                    <li>Write codes with the most appropriate programming language to meet best practices</li>
                                                    <li>Can transform business processes into programming code
                                                    </li>
                                                    <li>Experience leading teams</li>
                                                    <li>Thinks about the software project in general</li>



                                                </ul>
                                                </div>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="
                                                    w-full
                                                    block
                                                    text-base
                                                    font-semibold
                                                    text-primary
                                                    bg-transparent
                                                    border border-[#D4DEFF]
                                                    rounded-md
                                                    text-center
                                                    p-4
                                                    hover:text-white hover:bg-primary hover:border-primary
                                                    transition
                                                    "
                                                    >
                                                Hire Lead Freelancer
                                                </a>
                                                <div>
                                                    <span className="absolute right-0 top-7 z-[-1]">
                                                        <svg
                                                            width="77"
                                                            height="172"
                                                            viewBox="0 0 77 172"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                                            <defs>
                                                            <linearGradient
                                                                id="paint0_linear"
                                                                x1="86"
                                                                y1="0"
                                                                x2="86"
                                                                y2="172"
                                                                gradientUnits="userSpaceOnUse"
                                                                >
                                                                <stop stop-color="#3056D3" stop-opacity="0.09" />
                                                                <stop
                                                                    offset="1"
                                                                    stop-color="#C4C4C4"
                                                                    stop-opacity="0"
                                                                    />
                                                            </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className="absolute right-4 top-4 z-[-1]">
                                                        <svg
                                                            width="41"
                                                            height="89"
                                                            viewBox="0 0 41 89"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                            <circle
                                                            cx="38.9138"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="38.9138"
                                                            cy="1.42021"
                                                            r="1.42021"
                                                            transform="rotate(180 38.9138 1.42021)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="26.4157"
                                                            cy="1.4202"
                                                            r="1.42021"
                                                            transform="rotate(180 26.4157 1.4202)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="13.9177"
                                                            cy="1.42019"
                                                            r="1.42021"
                                                            transform="rotate(180 13.9177 1.42019)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="87.4849"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 87.4849)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="74.9871"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 74.9871)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="62.4892"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 62.4892)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="38.3457"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 38.3457)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="13.634"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 13.634)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="50.2754"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 50.2754)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="26.1319"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 26.1319)"
                                                            fill="#3056D3"
                                                            />
                                                            <circle
                                                            cx="1.41963"
                                                            cy="1.4202"
                                                            r="1.42021"
                                                            transform="rotate(180 1.41963 1.4202)"
                                                            fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </section>
                                        
                    </div>
                    {/* <div className={openTab === 2 ? "block" : "hidden"} id="link2">
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
                    </div> */}
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