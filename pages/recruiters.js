import React from 'react'
import Head from 'next/head';
import CompanyHero from 'components/mainPage/company/CompanyHero';
import CompStep from 'components/mainPage/company/CompStep';
import DroomDeep from 'components/mainPage/company/DroomDeep';
import CompBlog from 'components/mainPage/company/CompBlog';
import CompHire from 'components/mainPage/company/CompHire';


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

function company({blogData}) {
  return (
    <>
      <Head>
        <title>Droomwork</title>
        <meta name="description" content="Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs." />
        <link rel="icon" href="images/droomlogo.svg" />
        <meta property="og:image" content="images/featuredImage.png"></meta>
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

        <div className="container mx-auto">
          <CompanyHero />
          <div className="bg-[#f7f7f7]">
            <CompStep />
            <CompHire />
            <DroomDeep />
            
          </div>
          <CompBlog shortBlog={blogData} />
          
        </div>
    </>
  )
}

export default company

export async function getStaticProps(){

  const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts`, {
    headers:{
      'Accept':'application/json',
      'User-Agent': '*',
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