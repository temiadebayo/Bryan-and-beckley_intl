import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  const logoList = [
    {
      name: 'Rittal logo',
      link: '/images/rittal_gy.svg',
      href: 'https://www.rittal.com/com-en/',
      height: '250',
      width: '200',
    },

    {
      name: 'Austin Hughes logo',
      link: '/images/austin_gy.svg',
      href: 'https://www.austin-hughes.com/',
      height: '200',
      width: '250',
    },

    {
      name: 'Commscope Logo',
      link: '/images/commscope_gy.svg',
      href: 'https://www.commscope.com/',
      height: '200',
      width: '300',
    },

    {
      name: 'Ruckus logo',
      link: '/images/Ruckus_gy.svg',
      href: '#',
      height: '200',
      width: '300',
    },

    {
      name: ' C&D technology logo',
      link: '/images/C&D_gy.svg',
      href: 'https://www.cdtechno.com/',
      height: '200',
      width: '300',
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-screen mx-auto ">
        <h3 className="font-semibold  sm:text-2xl text-center">
          TRUSTED BY VENDORS FROM AROUND THE WORLD
        </h3>
        <div className="mt-6 ">
          <ul className=" flex flex-col sm:flex-row gap-y-8 sm:gap-x-6  items-center justify-center sm:divide-x-0 divide-y-0 sm:divide-solid ">
            {logoList.map((item, index) => (
              <li key={index} className="px-4">
                <Link passHref href={item.href}>
                  <Image
                    src={item.link}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    className=""
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Logo;
{
  /* <motion.div
        ref={ref}
        animate={controls}
        initial="initial"
        variants={fadeInUp}
        className="xl:container mx-auto p-8"
      >
        <div className="text-xl text-center text-gray-700 dark:text-white">
          Trusted
          <span className="dark:text-[#eb7df0] text-[#620D66]"> VENDORS </span>
          worldwide
        </div>
        <div className="grid grid-flow-col justify-center gap-5 mt-10 md:justify-around  max-w-l mx-auto">
          <div className="pt-2 text-gray-400 dark:text-white">
            <img
              src="https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702457868/Bryan%20and%20Beckley/Vendors%20LOGO/commscope_tlsp9j.png"
              alt="commScope logo"
              width={150}
              loading="eager"
              height={85}
            />
          </div>
          <div className="text-gray-400 dark:text-gray-400">
            <img
              src="https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702457868/Bryan%20and%20Beckley/Vendors%20LOGO/Ruckus_vwgg6f.png"
              alt="Ruckus logo"
              width={150}
              loading="eager"
              height={85}
            />
          </div>
          <div className="text-gray-400 dark:text-gray-400">
            <img
              src="https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702457868/Bryan%20and%20Beckley/Vendors%20LOGO/Austin_Hughes_yfhxgj.png"
              alt="Austin Hughes logo"
              width={150}
              loading="eager"
              height={85}
            />
          </div>
        </div>

        <div className="pt-1 text-gray-400 dark:text-gray-400">
          <img
            src="https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702457868/Bryan%20and%20Beckley/Vendors%20LOGO/Rittal_tadt2z.png"
            alt="Rittal logo"
            width={150}
            loading="eager"
            height={85}
          />
        </div>

        <div className="pt-2 text-gray-400 dark:text-gray-400">
          <img
            src="https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702457868/Bryan%20and%20Beckley/Vendors%20LOGO/C_D_ngaf3w.png"
            alt="C and D logo"
            width={150}
            height={85}
            loading="eager"
          />
        </div>
      </motion.div> */
}
