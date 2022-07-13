import 'styles/globals.css'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import { YMaps } from '@pbe/react-yandex-maps'

import { StateProvider } from 'state/context'
import Layout from 'pages/_layout'

const MyApp = ({ Component, pageProps }) => (
  <YMaps>
    <StateProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <title>iService</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  </YMaps>
)

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
})
