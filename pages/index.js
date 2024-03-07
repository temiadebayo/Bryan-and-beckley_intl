import Head from 'next/head';
// import Navbar from '../components/Navbar';
import NavBar from "../components/NavBar";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '../components/Hero';
import Article from '../components/Article';
import { benefitOne, benefitTwo } from '../lib/data';
import Footer from '../components/Footer';
import News from '../components/News';
import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
  //   const holder = localStorage.getItem('theme');
  //    console.log(holder)
  // },[]);

  return (
    <motion.div className="">
      <Head>
        <title>Bryan and Beckley International </title>
        <meta
          name="description"
          content="Bryan and Beckley international Limited"
        />
        
        <link rel="icon" href="/B_B.ico" />
      </Head>
      <NavBar />
      <Hero />

      <Article benefit={benefitOne} imgleft="true" />
      {/* <Article benefit={benefitTwo}/> */}
      <News />
      <Footer />
    </motion.div>
  );
}
