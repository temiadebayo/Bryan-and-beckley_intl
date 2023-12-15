import Link from 'next/link';
import { animate, motion } from 'framer-motion';
import ThemeChanger from './ThemeSwicher';
import Image from 'next/image';

export default function Navbar() {
  const navigation = [
    { name: 'Product', link: '/' },
    { name: 'Partners', link: '/' },
    { name: 'About Us', link: '/' },
    { name: 'Team', link: '/team' },
    { name: 'Contact us', link: '/contact' },
  ];
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
      className="xl:container text-slate-400 xl:mx-auto  transition-transform duration-500 ease-out "
    >
      <motion.nav
        variants={stagger}
        className="flex justify-between p-6 md:px-9 items-center inset-x-0 top-0 "
      >
        <motion.div variants={fadeInUp}>
          <Image
            src="/images/B_B.png"
            alt="logo of bryan and beckley"
            width={42}
            height={45}
          />
        </motion.div>
        {/* menu */}
        <motion.div variants={fadeInUp}>
          <motion.ul variants={stagger} className="hidden md:flex">
            {navigation.map((menu, index) => (
              <motion.li variants={fadeInUp} key={index} className="ml-6">
                <Link href={`${menu.link}`}>
                  <a
                    href={menu.link}
                    className="text-lg hover:border-b-4 pb-2 "
                  >
                    {menu.name}
                  </a>
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
            <a className="px-6 py-2 bg-[#620D66] rounded hover:rounded-full">
              Generate Quote
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
