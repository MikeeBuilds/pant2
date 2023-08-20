import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Roadmap from '@/components/Roadmap'
import Tvl from '@/components/Tvl'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Component {...pageProps} />
        <Roadmap />
        <Tvl />
      </div>
      <Footer />
    </div>
  )
}
