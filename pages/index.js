import React, {useState} from 'react';
import Head from 'next/head';
import HeroPage from 'components/mainPage/hirePage/HeroPage';
import WhySection from 'components/mainPage/hirePage/WhySection';
import TeamPage from 'components/mainPage/hirePage/TeamPage';
import CompStep from 'components/mainPage/company/CompStep';
import WhatPage from 'components/mainPage/hirePage/WhatPage';
import PricingPage from 'components/mainPage/hirePage/PricingPage';
import HireSteps from 'components/mainPage/hirePage/HireSteps';
import TestPage from 'components/mainPage/hirePage/TesPage';
import DevFoot from 'components/mainPage/hirePage/DevFoot';
import HomeBlog from 'components/mainPage/homePage/homeBlog';


//https://droomwork.io/?src=facebook

if(process.env.APP_env === 'production') {
    var api_origin = 'https://api.droomwork.io'
} else {
    api_origin = 'http://api.droomwork.io'
// api_origin = 'http://localhost:3000'
}

if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    const TokenAuthless = urlParams.get('enter')
    const Src = urlParams.get('src')
if(TokenAuthless){localStorage.setItem('authless', JSON.stringify(TokenAuthless))}
if(Src){localStorage.setItem('Src', JSON.stringify(Src))}
history.replaceState(null, "", location.href.split("?")[0])
    var Token = JSON.parse(localStorage.getItem("authless"))
}

export default function Home({blogData}) {
    return(
        <>
            <Head>
                <title>Droomwork ~ Hire Best Freelancers</title>
                <meta name="description" content="Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs." />
                <meta property="og:image" content="images/featuredImage.png"></meta>
                <link rel="icon" href="images/droomlogo.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet"></link>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-J4W91HKYYX"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                    `}
                </script>
            </Head>

            <div 
            className='grid container mx-auto'>
                <HeroPage />
                <WhySection />
                <TeamPage />
                <CompStep />
                <WhatPage />
                <PricingPage />
                <HireSteps />
                <TestPage />
                <HomeBlog shortBlog={blogData} />
                <DevFoot />
            </div>
        </>
    )
}

export async function getStaticProps(){

const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts`, {
    headers:{
    'Accept':'application/json',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36',
    Accept: "application/json; charset=UTF-8",
    'Authorization': `Bearer ${Token}`,
    'Content-type':'application/json',
    'Access-Control-Allow-Origin':'*'
    }
})
// const data = await JSON.stringify(response.data)
const data = await response.json()
// const data = datat.data.data

return{
    props:{
    blogData: data
    },
    revalidate: 10,
}
}