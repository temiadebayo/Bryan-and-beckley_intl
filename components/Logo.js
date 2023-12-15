import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const Logo = () => {
  const logoList = [
    {
      name: 'Commscope Logo',
      link: 'https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702551817/Bryan%20and%20Beckley/Vendors%20LOGO/commscope_kvhcsf.svg',
    },

    {
      name: 'Austin Hughes logo',
      link: 'https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702551818/Bryan%20and%20Beckley/Vendors%20LOGO/Austin_Hughes_dwndag.svg',
    },

    {
      name: 'Rittal logo',
      link: 'https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702551817/Bryan%20and%20Beckley/Vendors%20LOGO/Rittal_fc6ehy.svg',
    },

    {
      name: 'Ruckus logo',
      link: 'https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702551818/Bryan%20and%20Beckley/Vendors%20LOGO/Ruckus_fnacnh.svg',
    },

    {
      name: ' C&D logo',
      link: 'https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702551818/Bryan%20and%20Beckley/Vendors%20LOGO/C_D_xn6lfg.svg',
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-sm text-gray-600 text-center">
          TRUSTED BY VENDORS FROM AROUND THE WORLD
        </h3>
        <div className="mt-6">
          <ul className=" flex gap-x-2 sm:gap-x-4  items-center justify-center  lg:divide-x ">
            {logoList.map((item, index) => (
              <li key={index} className="px-3 ">
                <img
                  src={item.link}
                  alt={item.name}
                  height={100}
                  width={100}
                  loading="lazy"
                  className=""
                />
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
