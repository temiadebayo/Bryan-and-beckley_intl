import Image from "next/image"
import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from "framer-motion"


export default function Article({benefit, imgleft}){
    const controls = useAnimation();
    const [ref, inView] = useInView();

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


    useEffect(()=>{
        if(inView){
            controls.start("animate");
        }
    },[controls, inView])
    return (
        <motion.div
         ref={ref}
         initial="initial"
         animate={controls}
         variants={fadeInUp}
         className="xl:container xl:mx-auto lg:flex px-9 justify-between gap-12 mt-9 items-center text-center p-9">
            <div className={`lg:w-1/2 ${ imgleft=== "true" ? 'order-last' : "" }`}>
                <Image
                    src={benefit.image}
                    width="521"
                    height="482"
                    alt="Hero Illustration"
                    layout="intrinsic"
                    loading="eager"
                    placeholder="blur"
                    />
            </div>
            <div className="max-w-xl mx-auto text-left lg:w-1/2 mt-8 lg:order-2">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">{benefit.title}</h2>
            <p className="text-l mb-5 max-w-4xl flex-wrap">{benefit.desc}</p>
            <div>
                <div>
                    {benefit && benefit.bullets.map((bullet, index)=>(
                        <div key={index} className="flex items-start mt-8 space-x-3">
                            <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                                {React.cloneElement(bullet.icon, {
                                    className: "w-7 h-7 text-indigo-50",
                                })}
                            </div>
                            <div>
                                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200 text">
                                    {bullet.title}
                                </h4>
                                <p className="mt-1 text-gray-500 dark:text-gray-400">
                                    {bullet.desc}
                                </p>
                            </div>
                      </div>
                    ))}
                </div>
            </div>
            </div>
        </motion.div>
    )
}