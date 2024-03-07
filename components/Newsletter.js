import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format (optional)
    if (!email.trim()) {
      setError('Email is required');
      return;
    }

    try {
      const response = await axios.post(
        'https://api.hsforms.com/submissions/v3/integration/submit/45254536/9346f505-cfdb-4f06-89b9-8939fbd95d06',
        { fields: [{ name: 'email', value: email }] }
      );

      console.log('Form submitted successfully:', response.data);
      setSuccess(true);
      // Optionally, reset the form fields after successful submission
      setEmail('');
      setError('');
    } catch (error) {
      console.error('Form submission failed:', error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <section className="py-28 relative ">
         <div className="absolute inset-0 w-full h-full z-0" style={{ background: "linear-gradient(137.92deg, rgba(192, 132, 252, 0) 20.43%, rgba(232, 121, 249, 0.26) 49.66%, rgba(204, 171, 238, 0) 92.38%)" }}></div>
      <div className="relative max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
        <div className="flex-1 max-w-lg">
          <h3 className="text-3xl font-bold cursor-default">Get our beautiful newsletter straight to your inbox.</h3>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <form onSubmit={handleSubmit} className="flex items-center gap-x-3 md:justify-end">
            <div className="relative flex w-full max-w-[24rem]">
              <div className="relative h-10 w-full min-w-[200px]">
                <input
                  type="email"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <label
                  htmlFor="email"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  Enter email address
                </label>
              </div>
              <button
                className="!absolute right-1 top-1 select-none rounded bg-orange-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-gray-300/60 transition-all hover:shadow-lg hover:shadow-blue-gray-500/70 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none "
                type="submit"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </div>
          </form>
          {error && <div className="text-red-500 cursor-default">{error}</div>}
          {success && <div className="text-green-500 cursor-default">Thank you for subscribing!</div>}
        </div>
      </div>
     

    </section>
  );
};

export default Newsletter;
