import type { AppProps } from 'next/app'

// Layout 
import Layout from '../components/Layout'

// Global CSS
import '../global/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
