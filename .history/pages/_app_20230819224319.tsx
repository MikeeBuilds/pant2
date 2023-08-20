import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Roadmap from '@/components/Roadmap'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen"> {/* Flex container */}
        <div className="flex-grow"> {/* Content */}
          <Component {...pageProps} />
          <Roadmap />
        </div>
        <Footer /> {/* Footer */}
      </div>
    </>
  )
}
