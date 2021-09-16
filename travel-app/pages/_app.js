import '../styles/globals.css'
//for global styling
//app comp can be used to keep state when navigating between pages

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
