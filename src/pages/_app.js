import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return (
    <Sidebar>
    <Head>
        <title>User DashBoard</title>
    </Head>
      <Component {...pageProps} /> 
    </Sidebar>
    
  )
}
