import React from 'react';
import { useRouter } from 'next/router';
import { allDocs } from "../../.contentlayer/generated";

const Index = () => {
  const router = useRouter();
  const post = router.query.id;

  // const blogPosts = allDocs.find((blog) => blog._raw.flattenedPath === post)
  //   if(!blogPosts) throw new Error(`page not found for ${post}`)
  console.log(post);
  const blogposts = allDocs.find((blog) => blog._raw.flattenedPath === post)
  console.log(blogposts)
  return <div>
    <h1 className="p-4 ">{blogposts?.title}</h1>
    <img src={blogposts?.images } className="sm:min-w-[500px] w-screen h-auto rounded"/>
    <p>{blogposts?.desc}</p>
  </div>;
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