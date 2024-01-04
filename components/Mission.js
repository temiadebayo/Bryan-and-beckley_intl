import Image from 'next/image';
import React from 'react';

const Mission = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="/images/valueprop.png"
              className="md:max-w-lg sm:rounded-lg "
              style={{ maxWidth :'100%', height :'auto' ,}}
              alt="Article Illustration"
              placeholder="blur"
              // objectFit="contain"
              // objectPosition="fill"
              loading="eager"
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-3xl font-semibold sm:text-4xl">
              Who Are We?
            </p>
            <p className="mt-3 ">
              We provide businesses with access to the best IT infrastructure
              and digital solutions. As a fast-growing value-added distributor,
              we leverage our partnership with top-tier technology manufacturers
              to deliver tailored solutions and services.
              <br />
              <br />
              We distribute converged IT Infrastructure solutions designed to
              meet the specific needs of your organization. Our team essentially
              serves as your experienced friend in technology, through our
              strategic partnership with leading global vendors in wireless
              communications, data centre, security, and digital solutions.
              <br />
              <br />
              You can rely on our expertise to deliver scalable solutions with
              resilience and high perceived value that enable and accelerate
              your business processes and operations.
            </p>
            {/* <a
              href="javascript:void(0)"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>

    //    <div className="max-w-screen p-4 sm:p-8 bg-gray-200 block ">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 p-4 ">
    //     <div className="">
    //       <h4 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 text-[#620D66]">
    //         Who We Are?
    //       </h4>
    //       <p className="text-sm sm:text-base text-gray-800 mb-6">
    //         We provide businesses with access to the best IT infrastructure and
    //         digital solutions. As a fast-growing value-added distributor, we leverage
    //         our partnership with top-tier technology manufacturers to deliver tailored
    //         solutions and services.
    //         <br />
    //         <br />
    //         We distribute converged IT Infrastructure solutions designed to meet the
    //         specific needs of your organization. Our team essentially serves as your
    //         experienced friend in technology, through our strategic partnership with
    //         leading global vendors in wireless communications, data centre, security,
    //         and digital solutions.
    //         <br />
    //         <br />
    //         You can rely on our expertise to deliver scalable solutions with resilience
    //         and high perceived value that enable and accelerate your business processes
    //         and operations.
    //       </p>
    //       <button className="px-2 sm:px-4 py-2 sm:py-2 bg-[#620D66] text-white rounded focus:outline-none focus:shadow-outline-purple active:bg-purple-800 hover:bg-purple-700 ">
    //         Learn More
    //       </button>
    //     </div>
    //     <div className="px-4 sm:px-8 sm:grid hidden">
    //       <Image
    //         src="/images/valueprop.png"
    //         width="450"
    //         height="550"
    //         alt="Article Illustration"

    //         objectFit="contain"
    //         objectPosition="center"
    //         loading="eager"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Mission;
