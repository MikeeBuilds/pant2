import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Header  from '@/components/Header'
import type { AppProps as NextAppProps } from 'next/app'

export default function App({ Component, pageProps }: NextAppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
