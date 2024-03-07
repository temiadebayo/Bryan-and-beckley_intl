import { useEffect } from 'react';
import heroImg from '../public/images/hero.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Logo from './Logo';
export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const easing = [0.6, -0.5, 0.01, 0.99];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div className="cursor-default">
      <section className="relative  ">
        <video
          // playsInline={true}
          autoPlay={true}
          loop={true}
          muted={true}
          src="/bg-video.mp4"
          className="h-[45vh] md:h-[86vh] object-cover w-screen md:top-0 md:left-0"
        ></video>

        <div className="absolute top-0 left-0 w-screen h-full bg-black bg-opacity-50 flex flex-col justify-center items-center ">
          <div className="sm:mb-[350px] sm:pt-[140px]  block  lg:leading-[65px] sm:leading-[40px] ">
            <p className="text-gray-300 lg:text-sm text-[8px] sm:pt-7 lg:py-4 text-center ">
              Meet Bryan & Beckley International Ltd All Access
            </p>
            <h1 className=" text-center font-semibold text-[20px] md:text-[30px] lg:text-[65px]  text-slate-300">
              Your Innovative IT infrastructure &
              <span className="block text-slate-300 dark:text-[#A4A9CE]">
                Digital Solutions
              </span>
            </h1>
          </div>
        </div>
      </section>

      <motion.div
        ref={ref}
        animate={controls}
        initial="animate"
        variants={fadeInUp}
        className="xl:container mx-auto px-4 md:px-9 lg:flex justify-between  absolute top-0 items-center lg:text-left  text-center"
      ></motion.div>

      <motion.div
        ref={ref}
        animate={controls}
        initial="initial"
        variants={fadeInUp}
        className="xl:container xl:mx-auto px-9 text-center"
        id="value"
      >
        <h2 className="dark:text-[#A4A9CE] sm:text-3xl my-4 py-6 font-bold text-[#9e4ea2]">
          VALUE PROPOSITION
        </h2>
        {/* <h2 className="text-3xl font-thin lg:text-3xl mb-2">
        Architecturing integrated IT infrastructure and digital solutions with cumulative 20 years experience
        </h2> */}
        <p className="md:px-[4rem] lg:px-[8rem] text-[14px] lg:text-lg">
          Bryan & Beckley International is a multinational IT Infrastructure and
          Digital Solutions provider across Africa. With a multinational
          presence, we excel in unified communications, data center, and
          security solutions, offering top-notch technical support and exceeding
          corporate client expectations.
        </p>
      </motion.div>
    </motion.div>
  );
}
