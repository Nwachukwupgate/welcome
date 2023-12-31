import React, {useState} from 'react';
import Head from 'next/head';
import HomeHero from 'components/mainPage/homePage/homeHero';
import ServicesSection from 'components/mainPage/homePage/sevices';
import { ExtraServices } from 'components/mainPage/homePage/extraServices';
import SuccessCase from 'components/mainPage/homePage/successCase';
import UniquePage from 'components/mainPage/homePage/unique';
import TestimonialPage from 'components/mainPage/homePage/testimonial';
import ModalTestimony from 'components/mainPage/homePage/modal';
import MiniTestimony from 'components/mainPage/homePage/miniTestimony';
import LogoCompany from 'components/mainPage/homePage/logo';
import StackLogo from 'components/mainPage/homePage/stackLogo';
import HomeBlog from 'components/mainPage/homePage/homeBlog';
import FormField from 'components/mainPage/homePage/form';
// import MappedCases from 'components/mainPage/homePage/mappedCases';

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


export default function Build({blogData}) {
  // export default function Build() {
  const [showModal, setShowModal] = useState(false);
    return (
      <>
        <Head>
          <title>Droomwork</title>
          <meta name="description" content="Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs." />
          <link rel="icon" href="images/droomlogo.svg" />
          <meta property="og:image" content="images/featuredImage.png"></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet" />
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
  
        <HomeHero />
        <ServicesSection />
        <ExtraServices />
        <SuccessCase />
        <UniquePage />
        <TestimonialPage setShowModal={setShowModal} />
        {showModal ? <ModalTestimony setShowModal={setShowModal} /> : null}
        <MiniTestimony />
        <LogoCompany />
        <StackLogo />
        <HomeBlog shortBlog={blogData} />
        <FormField />

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