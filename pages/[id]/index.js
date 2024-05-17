import React from 'react';
import { useRouter } from 'next/router';
import { allDocs } from '../../.contentlayer/generated';
import Image from 'next/image';

const Index = () => {
  const router = useRouter();
  const post = router.query.id;

  // const blogPosts = allDocs.find((blog) => blog._raw.flattenedPath === post)
  //   if(!blogPosts) throw new Error(`page not found for ${post}`)
  console.log(post);
  const blogposts = allDocs.find((blog) => blog._raw.flattenedPath === post);
  console.log(blogposts);
  return (
    <div className="p-4 text-left bg-gray-200">
      <article className="max-w-4xl mx-auto my-8 p-6 flex flex-col gap-4 shadow-sm ">
        <h1 className="font-semibold text-2xl py-4 sm:text-3xl lg:text-4xl">
          {blogposts?.title}
        </h1>
        <p className=" lg:text-md text-[14px]  min-w-full">
          {blogposts?.desc}
        </p>
        <Image
          alt='blog image'
          src={blogposts?.images}
          className="sm:min-w-[500px] w-auto h-auto rounded-md py-6 "
        />
        <p className="sm:leading-6 font-sans">{blogposts?.more}</p>
      </article>
     
    </div>
  );
};

export default Index;

// export async function getStaticProps({params} ) {
//   const post = allDocs.find(
//     (post) => post._raw.flattenedPath === params?.id
//   )

//   return typeof post === "undefined"
//     ? {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       }
//     : {
//         props: {
//           post,
//         },
//       }
// }
// export async function getStaticPaths(){
//   const paths = allDocs.map((post) => post.url);
//   return {
//     paths,
//     fallback: false
//   }
// }
