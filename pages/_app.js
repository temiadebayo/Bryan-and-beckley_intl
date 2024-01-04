import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "next-themes";
import NavBar from "../components/NavBar";




function MyApp({ Component, pageProps}) {
  return (<AnimatePresence exitBeforeEnter>
      <ThemeProvider attribute="class">
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
  </AnimatePresence>);
}

export default MyApp
