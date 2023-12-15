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
    <motion.div className="relative">
      <section className="relative  ">
        <video
          playsInline={true}
          autoPlay={true}
          layout="intrinsic"
          loop={true}
          muted={true}
          preload="auto"
          src="/bg-video.mp4"
          className=" relative bg-gradient-to-tr  object-contain"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center ">
          <div className="md:mb-[350px] mb-[40px] leading-5 block md:leading-[75px] ">
            <p className="text-white/70 md:text-sm text-[10px] text-center ">
              Meet Bryan & Beckley International Ltd All Access
            </p>
            <h1 className=" text-center font-bold text-[20px] md:text-[30px] lg:text-[65px]  text-white">
              Your Innovative IT infrastructure &
              <span className="block text-[#620D66] dark:text-[#e95df1]">
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
      >
        <h2 className="dark:text-[#eb7df0] sm:text-3xl my-4 pt-6 font-bold text-[#620D66]">
          VALUE PROPOSITION
        </h2>
        {/* <h2 className="text-3xl font-thin lg:text-3xl mb-2">
        Architecturing integrated IT infrastructure and digital solutions with cumulative 20 years experience
        </h2> */}
        <p className="md:px-24 lg:px-[8rem] text-[14px] lg:text-sm">
          Bryan & Beckley International is a multinational IT Infrastructure and
          Digital Solutions provider across Africa. With a multinational
          presence, we excel in unified communications, data center, and
          security solutions, offering top-notch technical support and exceeding
          corporate client expectations. Trust us to be your IT partner for
          African success <span className="text-xl text-clip">on:</span>
        </p>
      </motion.div>

    </motion.div>
  );
}
