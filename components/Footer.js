import Image from 'next/image';
import React from 'react';

const Footer = () => {
  const footerNavs = [
    // {
    //   href: '/',
    //   name: 'Terms',
    // },
    // // {
    // //   href: '/',
    // //   name: '',
    // // },
    // {
    //   href: '/',
    //   name: 'Privacy',
    // },
    {
      href: '/about',
      name: 'About',
    },
    {
      href: '/contact',
      name: 'Contact',
    },
  ];

  return (
    <footer className="pt-10 footer">
      <div className="max-w-screen-xl mx-auto px-4 dark:text-gray-200 md:px-8">
      
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2023 Bryan and Beckley Intl. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            { footerNavs.map((item, idx) => (
              <li key={idx} className="dark:text-gray-200 hover:text-gray-500 duration-550">
                <a  href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
