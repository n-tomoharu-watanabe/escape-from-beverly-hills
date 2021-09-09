import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import "../styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>ビバリーヒルズからの脱出</title>
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App