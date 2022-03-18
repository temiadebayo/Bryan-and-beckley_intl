import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps}) {
  return (<AnimatePresence exitBeforeEnter>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  </AnimatePresence>);
}

export default MyApp
