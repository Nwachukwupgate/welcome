import React, { useEffect } from 'react';
import '../styles/globals.css';
// import { Nav } from '@/layout/Header';
import { Nav } from  '@/layout/Header'
import { Footer } from '@/layout/Footer'
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux'
import {store} from 'reactWrapper/redux/store'
import { hotjar } from 'react-hotjar'

// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'

// let persistor = persistStore(store)
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3172685, 6)
  }, [])

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
