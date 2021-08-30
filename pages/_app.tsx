import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <html lang='en'>
      <Head>
        <title>Rock Paper Scissors</title>
        <meta property="og:title" content="Rock Paper Scissors" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="rock paper scissors 2D game" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="theme-color" content="black" />
        <link rel="manifest" href="../public/manifest.json" />
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        <link rel="shortcut icon" href="../public/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </html>
  </Provider>
}
export default MyApp
