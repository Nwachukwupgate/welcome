import '../styles/globals.css';
// import { Nav } from '@/layout/Header';
import { Nav } from  '@/layout/Header'
import { Footer } from '@/layout/Footer'
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux'
import {store} from 'reactWrapper/redux/store'


function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        < Component {...pageProps} />
      </Provider>
    )
  }

  return(
    <>
      <Provider store={store}>
        <Nav />
        <NextNProgress />
          <Component {...pageProps} />
        <Footer />
      </Provider>
      
    </>
  ) 
}

export default MyApp;
