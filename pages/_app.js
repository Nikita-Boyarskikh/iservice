import 'styles/globals.css'

import Head from 'next/head'

import Layout from 'pages/_layout'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <title>iService</title>
    </Head>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
