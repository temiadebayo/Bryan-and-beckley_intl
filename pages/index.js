import Head from 'next/head'
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import Link from "next/link"
import Hero from '../components/Hero'

export default function Home() {
  return (
    <motion.div className="">
      <Head>
        <title>Delta Theme - Business Page Template</title>
        <meta name="description" content="Business page landing page template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
    </motion.div>
  )
}
