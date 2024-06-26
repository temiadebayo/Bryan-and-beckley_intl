import React from 'react';

const About = () => {
  return (
    <div>
      <section className="text-lg scroll-smooth">
        <div className="md:py-[150px] bg-[#4A4599] py-[80px]">
          <div>
            <h1 className="sm:text-[30px] lg:text-[50px] text-center font-semibold">
            Redefining the Future of Distribution Partnership
            </h1>
            <p className=" text-center font-white px-6 sm:text-[25px] text-[20px]   leading-8 py-8">
              We are committed to building cloud-based and client-centered
              technology solutions that will transform the distribution
              experience for everyone.
            </p>
          </div>
          <div className="w-full  mb-12">
            <div className="flex flex-col-reverse md:flex-row max-w-8xl justify-center px-4 rounded m-auto gap-y-12 gap-x-10">
              {/* Our Mission */}
              <div className="bg-white dark:bg-[#252525] p-8 shadow-md max-w-2xl">
                <hr className="w-8 mb-2 border-t-8 border-[#4A4599]"></hr>
                <h2 className="text-3xl md:text-4xl font-semibold mb-2">
                  Our Mission
                </h2>
                <div className="max-w-4xl text-[20px] leading-8">
                  <p className="text-[#4A4599] py-2 font-bold">
                    Innovation, Resilience and sustainability
                  </p>
                  <p>
                    Bryan and Beckley International facilitates an
                    organization’s digital transformation through innovation and
                    resilient IT infrastructure offerings for business
                    sustainability and growth
                  </p>
                </div>
              </div>
              {/* Our Services */}
              <div className="bg-white dark:bg-[#252525] p-8 shadow-md max-w-2xl">
                <hr className="w-8 mb-2 border-t-8 border-[#4A4599]"></hr>
                <h2 className="text-3xl md:text-4xl font-semibold mb-2">
                  Our Services
                </h2>
                <div className="max-w-4xl text-[20px] leading-8">
                  <p className="text-[#4A4599] font-bold">
                    Infrastructure Solutions
                  </p>
                  <p>
                    We provide hardware, software network resources and
                    services, which are required to run an organization
                    successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
