import Layout from '@/components/jsx/Layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Entropic Software</title>
        <meta name="description" content="Entropic Software" />
        <link rel="icon" href="/EntropicLogo.png" />
        <link rel="shortcut icon" href="/EntropicLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fc034e" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
