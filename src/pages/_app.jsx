import Router from 'next/router'
import nProgress from 'nprogress'

import '@/styles/globals.css'
import '@/styles/nprogress.css'

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
