import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Header  from '@/components/Header'
import Footer from '@/components/Footer'
import Road from '@/components/Roadmap'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Component {...pageProps}  />
      <Header />
      <Roadmap />
      <Footer />
    </>
  )
}
