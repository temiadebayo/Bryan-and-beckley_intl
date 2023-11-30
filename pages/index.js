import Head from 'next/head'
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import Link from "next/link"
import Hero from '../components/Hero'
import Article from "../components/Article"
import { benefitOne, benefitTwo } from "../lib/data"
import Footer from "../components/Footer"
import TeamPage from "../components/TeamPage"


export default function Home() {
  return (
    <motion.div className="relative">
      <Head>
        <title>Bryan and Beckley international</title>
        <meta name="description" content="Bryan and Beckley international all access" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>

      <Article benefit={benefitOne} imgleft="true"/>
      {/* <Article benefit={benefitTwo}/> */}
      <Footer />
    </motion.div>
  )
}
