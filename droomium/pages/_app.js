import '../styles/globals.css';
// import { Nav } from '@/layout/Header';
import { Nav } from  '@/layout/Header'
import { Footer } from '@/layout/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Nav />
        <Component {...pageProps} />
      <Footer />
    </>
  ) 
}

export default MyApp;
