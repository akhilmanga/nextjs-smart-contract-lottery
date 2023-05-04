import '@/styles/globals.css'
import { MoralisProvider } from "react-moralis"

function App({ Component, pageProps }) {
  return (
    <MoralisProvider intializeOnAmount={false}>
      <Component {...pageProps} />
    </MoralisProvider>

  )
}

export default App
