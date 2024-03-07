import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ThemeChanger from './ThemeSwicher';
import Image from 'next/image';
// import { useRouter } from 'next/router';

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
    { name: 'Home', link: '/' },
    // { name: 'Product', link: '/contact' },
    // { name: 'Partners', link: '/contact' },
    { name: 'Origin Story', link: '/about' },
    // { name: 'Contact ', link: '/contact' },
  ];
  // const router = useRouter();
  // const isHomePage = router.pathname === '/';

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
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
      {/* {router.pathname === '/' ? item : ''} */}
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4 text-[white] ">
        <Image
          src="/images/BB.svg"
          // style={{ color: `${textColor}` }}
          alt="Bryan and beckley logo"
          height={53}
          width={150}
        />

        <div role="navigation">
          <ul className="hidden sm:flex " style={{ color: `${textColor}` }}>
            {navigation.map((item, index) => (
              <li
                key={index}
                tabIndex="0"
                className="  p-4 hover:border-t-2 hover:border-t-[#cb754a] hover:text-[#cb754a] cursor-pointer focus:outline-none text-xl "
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            {/* {isHomePage && (
              <li className="px-2 hover:border-b-4 cursor-pointer   text-xl">
                <a href="#value">Value Proposition</a>
              </li>
            )} */}
          </ul>
        </div>

        <div
          style={{ color: `${textColor}` }}
          className="hidden md:flex md:flex-row-1 md:px-4 md:space-x-2 md:justify-center"
        >
          <div className="flex justify-center items-center">
            <Link
              passHref
              href={
                'https://www.linkedin.com/company/bryan-and-beckley-international/'
              }
            >
              <AiOutlineLinkedin
                // color="#000700"
                size={35}
                className=" items-center cursor-pointer hover:drop-shadow-2xl hover:size-4"
              />
            </Link>
          </div>
          <Link href={'/contact'} passHref>
            <button
              style={{ color: `${textColor}` }}
              className="px-4 py-2 border-2 border-[#cb754a]  rounded-md  hover:bg-[#cb754a]"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div>
          <ThemeChanger />
        </div>
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
          <ul className="pt-[260px] h-screen " onClick={handleClick}>
            {navigation.map((item, index) => (
              <li key={index} className="p-4 border-b text-4xl hover:text-gold">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}

            {/* <div className="z-10 pb-[25px] pt-[75px] cursor-pointer flex gap-5 items-center justify-center">
              <AiOutlineInstagram size={30} color="#C13584" />
              <AiOutlineFacebook size={30} color=" #3B5998" />
            </div> */}
            <div className="items-center flex justify-center p-4">
              <Link
                passHref
                href={
                  'https://www.linkedin.com/company/bryan-and-beckley-international/'
                }
              >
                <AiOutlineLinkedin
                  // color="#000700"
                  size={35}
                  className=" items-center cursor-pointer hover:shadow-2xl"
                />
              </Link>
            </div>
            <div onClick={handleClick} className="p-4">
              <Link href={'/contact'} passHref>
                <button
                  // onClick={handleClick}

                  className="px-6 py-3 text-[white] border border-[white]
    hover:bg-transparent bg-[#620D66] rounded hover:rounded-full hover:drop-shadow-lg"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </ul>
        </div>
        {/* <ThemeChanger /> */}
      </div>
    </div>
  );
};

export default NavBar;
