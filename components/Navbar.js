import Link from "next/link";
import { animate, motion } from 'framer-motion';
import ThemeChanger from './ThemeSwicher'

export default function Navbar(){
    const navigation = [
        "Product",
        "Features",
        "Pricing",
        "Company",
        "Blog",
      ];
      const easing = [0.6, -0.5, 0.01, 0.99];
      const fadeInUp= {
          initial:{
              y: 60,
              opacity: 0
          },
          animate: {
              y: 0,
              opacity: 1,
              transition: {
                  duration: .5,
                  ease: easing
              }
          }
      }

      const stagger = {
          animate: {
              transition: {
                  staggerChildren: 0.1,
              }
          }
      }
    return (
        <motion.div initial="initial" animate="animate" className="xl:container xl:mx-auto">
            <motion.nav variants={stagger} className="flex justify-between px-4 md:px-9 py-5 items-center">
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold">Logo</motion.h2>
                {/* menu */}
                <motion.div variants={fadeInUp}>
                <motion.ul variants={stagger} className="hidden md:flex">
                    {
                        navigation.map((menu, index)=>(
                            <motion.li variants={fadeInUp} key={index} className="ml-6">
                                <Link href='#'>
                                    <a className="text-lg hover:text-indigo-500">{menu}</a>
                                </Link>
                            </motion.li>
                        ))
                    }
                </motion.ul>
                </motion.div>
                {/* CTA */}
                <motion.div variants={fadeInUp} className="hidden space-x-4 lg:flex nav__item">
                    <Link href="/">
                        <a className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                        Get Started
                        </a>
                    </Link>
                <ThemeChanger/> 
                </motion.div>
                {/* TODO: Replace # with hanburger icon.
                -Connect button to open mobile menu  */}
                <motion.div variants={fadeInUp} className="md:hidden">
                    ###
                </motion.div>
            </motion.nav>
        </motion.div>
    )
}