import BlogDetails from "components/blog/blogDetails/blogDetails";
import ScrollIndicator from "components/blog/scrollProgress/ScrollProgress";
import Head from "next/head";
import { useRouter } from "next/router";

if(process.NEXT_PUBLIC_NODE_ENV === 'development') {
  var api_origin = 'http://localhost:3333'
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


export default function Details({ postDetails }) {
  // console.log(postDetails,'segu ')

    const router = {useRouter}

    if(router.isFallback){
      return(
        <div role="status">
          <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#001935]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    return (
      <>
        <Head>
        
        <meta name="description" content="Get qualified and reliable developers & designers around the world with hourly rates ranging from $8 - $193 to jump on your project within 48hrs." />
        <link rel="icon" href="images/droomlogo.svg" />
        <meta property="og:image" content="images/featuredImage.png"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet"></link>
        <title>{postDetails !== undefined? postDetails?.title:'Droomwork'}</title>
        
        </Head>
    
        <ScrollIndicator/>
        <BlogDetails postDetails={postDetails} />
      </>
    )
  }

  export async function getStaticProps(context) {

    const { params } = context
    // console.log("this is the slug", params.slug)
    const title = params.slug
  
    const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts/${title}`, {
      headers:{
        'Accept':'application/json',
        'Authorization': `Bearer ${Token}`,
        'Content-type':'application/json',
        'Access-Control-Allow-Origin':'*'
      }
    })
    const post = await response.json()
    // deep nesting
    const data = post?.data?.data
    // const data = JSON.parse(JSON.stringify(post?.data?.data))
    // const data = JSON.parse(JSON.stringify(dataPost))
    // console.log("this is ", post)
  
    return {
      props: {
        postDetails: data[0],
      },
      revalidate: 10,
    }
  
  }

export async function getStaticPaths(){

  const response = await fetch(`${api_origin}/api/v1/admin/getBlogPosts`, {
    headers:{
      'Accept':'application/json',
      'Authorization': `Bearer ${Token}`,
      'Content-type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  })
  const data = await response.json()
  // console.log("the data", data)
  const paths = data.data.data.map((post) => {
    // console.log(post)
    // console.log(post.slug)
    return{
      params: {
        slug: `${post.slug}`
      }
    }
  })
  return {
    paths,
    fallback: true,
  }
}
