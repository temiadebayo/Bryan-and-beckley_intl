'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import styles from '/styles/Home.module.css';
import Link from 'next/link';

const News = () => {
  //  const data = blogNews()
  //  console.log(data)
  const [news, setNews] = useState(null);
  console.log(news);

  const customedData = async () => {
    const data = await axios
      .get(`${process.env.NEXT_PUBLIC_NEWS_API}`, {
        headers: { 'x-api-key': process.env.NEXT_PUBLIC_NEWS_API_SECRET },
      })
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    customedData();
  }, []);
  return (
    <section className="py-14 ">
      <div className="max-w-screen-xl mx-auto px-4 dark:text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative ">
            <h4 className="dark:text-gray-400 text-3xl font-semibold sm:text-4xl lg:text-5xl">
              News and Analysis
            </h4>
            <p className="mt-3 dark:text-slate-400">
              Get latest trending topics in Technology.
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xl mx-auto h-44 blur-[200px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <div className="relative mt-12 overflow-hidden">
          <ul
            className={`flex gap-x-8 overflow-x-auto overflow ord ${styles.ord}`}
          >
            {news?.articles?.map((item, idx) => (
              <li
                key={idx}
                className="bg-white space-y-3 p-4 border rounded-lg min-w-92"
              >
                {/* <img src={} alt="" layout="fill" objectFit="cover" /> */}
                <div className="text-indigo-600 pb-3"></div>
                <div className="inline-block bg-[#A4A9CE] -translate-y-1/2 rounded-lg px-3">
                  <p className="text-black/70 font-medium pt-2">{item.author}</p>
                  <hr className="w-12 mb-2 border-t-8 border-[#bcb8fc]"></hr>
                </div>
                <Link href={item.url} passHref>
                  <h4 className="text-lg hover:text-indigo-600 hover:underline">
                    {item.title}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;
