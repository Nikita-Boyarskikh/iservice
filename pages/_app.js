import 'styles/globals.css'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import Layout from 'pages/_layout'
import { StateProvider } from 'state/context'

const MyApp = ({ Component, pageProps }) => (
  <StateProvider>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <title>iService</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  </StateProvider>
)

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
})
