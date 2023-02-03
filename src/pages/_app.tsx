import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from '@G.styles/global-style'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <link
          key="favicon"
          rel="icon"
          type="image/x-icon"
          href="/assets/favicon.ico"
        />
      </Head>
      <ToastContainer />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
