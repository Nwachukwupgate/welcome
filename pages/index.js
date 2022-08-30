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
  

export default function Home({blogData}) {
    return(
        <>
            <Head>
                <title>Droomwork ~ Hire Best Freelancers</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="images/droomlogo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet"></link>
            </Head>

            <div className='grid container mx-auto'>
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