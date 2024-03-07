import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider
        defaultTheme="light"
        attribute="class"
        enableSystem={false}
      >
        <NavBar />
        <Component {...pageProps} />
        <style global jsx>{`
          :root {
            --background-color: #f2f2f2; /* Off-White */
            --text-color: #333333; /* Dark Gray */
          }
        `}</style>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
