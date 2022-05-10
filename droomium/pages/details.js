import BlogDetails from "components/blogDetails/blogDetails";
import ScrollIndicator from "components/scrollProgress/ScrollProgress";
import Head from "next/head";


export default function Details() {
    return (
      <>
        <Head>
          <title>Droomium</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <ScrollIndicator/>
        <BlogDetails />
      </>
    )
    
  }
