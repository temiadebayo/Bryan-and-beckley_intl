import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ThemeChanger from './ThemeSwicher';

import {
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMenu,
  AiOutlineMenuFold,
} from 'react-icons/ai';

const NavBar = () => {
  const navigation = [
    // { name: 'Home', link: '/' },
    // { name: 'Product', link: '/contact' },
    // { name: 'Partners', link: '/contact' },
    { name: 'About', link: '/about' },
    { name: 'Contact ', link: '/contact' },
  ];
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#fff');
        setTextColor('#000');
      } else {
        setColor('transparent');
        setTextColor('#fff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 right-0 top-0 w-screen z-10 ease-in duration-300"
    >
      <div className="md:max-w-[1240px] mx-auto flex justify-between items-center p-4 text-[white] ">

          <img
            src="https://res.cloudinary.com/dzcwvkzmy/image/upload/v1702721950/Bryan%20and%20Beckley/icons_website/B_B_ov9riz.png"
            style={{ color: `${textColor}` }}
            alt="Bryan and beckley's logo"
            className="text-2xl font-bold sm:text-2xl w-[50px] h-[50px] cursor-pointer "
          />

        <div>
          <ul className="hidden sm:flex " style={{ color: `${textColor}` }}>
            {navigation.map((item, index) => (
              <li key={index} className="p-4 hover:border-b">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ color: `${textColor}` }} className="hidden md:flex  ">
          <AiOutlineLinkedin
            color="#0077b5"
            className=" pr-2 flex items-center text-5xl cursor-pointer "
          />

          <button
            style={{ color: `${textColor}` }}
            className="px-5 py-2 border-2 hover:rounded-full border-[#620D66] dark:border-[#A4A9CE] hover:bg-transparent rounded-md "
          >
            Request a quote
          </button>
        </div>
          <ThemeChanger />
        {/* z-10 to display on top of the overlay */}
        <div
          onClick={handleClick}
          className="sm:hidden block z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenuFold size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu*/}
        <div
          className={
            nav
              ? 'sm:hidden bg-[#620D66] absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
              : 'sm:hidden bg-[#620D66] absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
          }
        >
          <ul className="pt-[260px] h-screen min-w-fit">
            {navigation.map((item, index) => (
              <li key={index} className="p-4 border-b text-4xl hover:text-gold">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}

            <div className="z-10 pb-[25px] pt-[75px] cursor-pointer flex gap-5 items-center justify-center">
              <AiOutlineInstagram size={30} color="#C13584" />
              <AiOutlineFacebook size={30} color=" #3B5998" />
            </div>
            <div>
              <button
                onClick={handleClick}
                className="px-8 py-3 text-[white] border border-[white]
    hover:bg-transparent bg-[#620D66] rounded hover:rounded-full hover:drop-shadow-lg"
              >
                Generate Quote
          <ThemeChanger />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
