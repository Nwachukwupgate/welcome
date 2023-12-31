import Head from 'next/head'
import Image from 'next/image'
import Content from "components/blog/blogHero/BlogHero";
import TopPost from "components/blog/titleText/TopPost";
import Blog from "components/blog/blogSection/BlogSection";
import Feature from "components/blog/category/Category";
import AllPost from "components/blog/titleText/AllPost";
import AllBlog from "components/blog/fullBlog/AllBlog";


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
  return (
    <>
      <Head>
      <title>Droomwork</title>
        <meta name="description" content=" Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs." />
        <link rel="icon" href="images/droomlogo.svg" />
        <meta property="og:image" content="images/featuredImage.png"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet"></link>
      </Head>

      <Content/>
      <TopPost />
      <Blog shortBlog={blogData}/>
      <Feature />
      {/* <AllPost /> */}
      <AllBlog fullBlog={blogData} />
    </>
  )
}

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
  // console.log(data)

  return{
    props:{
      blogData: data
    },
    revalidate: 10,
  }
}