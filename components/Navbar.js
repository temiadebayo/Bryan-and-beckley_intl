import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import ThemeChanger from './ThemeSwicher';
import Image from 'next/image';

export default function Navbar() {
  const navigation = ['Product', 'Partners', 'About Us', 'Team'];
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
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="xl:container xl:mx-auto z-50 fixed overflow-hidden transition-transform duration-500 ease-out-circ inset-0 "
    >
      <motion.nav
        variants={stagger}
        className="flex justify-between px-4 md:px-9 py-5 items-center relative inset-x-0 top-0 -bottom-0.5 bg-bottom bg-[length:100% - 138%] bg-gradient-to-b from-transparent to-transparent to-[calc(100% - 2px)]"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl font-bold">
          <Image
            src="/images/B_B.png"
            alt="logo of bryan and beckley"
            width={42}
            height={45}
          />
        </motion.h2>
        {/* menu */}
        <motion.div variants={fadeInUp}>
          <motion.ul variants={stagger} className="hidden md:flex">
            {navigation.map((menu, index) => (
              <motion.li variants={fadeInUp} key={index} className="ml-6">
                <Link href="#">
                  <a className="text-lg hover:text-[#620D66]">{menu}</a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="hidden space-x-4 lg:flex nav__item"
        >
          <Link href="/">
            <a className="px-6 py-2 text-white bg-[#620D66] rounded-md md:ml-5">
              Get Quote
            </a>
          </Link>
          <ThemeChanger />
        </motion.div>
        {/* TODO: Replace # with hanburger icon.
                -Connect button to open mobile menu  */}
        <motion.div variants={fadeInUp} className="md:hidden">
          ###
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
