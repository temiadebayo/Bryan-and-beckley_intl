export default async function blogNews(){
  const result = await fetch(`${process.env.NEXT_PUBLIC_NEWS_API + '/v2'}`)
  const data = result.json()
  return data
} 







// const $_NEWS_GATEWAY_API = process.env.NEXT_PUBLIC_NEWS_API + '/v2';
// const $_NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_SECRET;

// export const NEWS_GATEWAY_API = axios.create({
//   baseURL: $_NEWS_GATEWAY_API,
//   params: {
//     apiKey: $_NEWS_API_KEY,
//     // country: 'us',
//     q: 'technology',
//   },
// });

// const instances = [NEWS_GATEWAY_API];

// instances.map((instance) => {
//   instance.interceptors.request.use();
// });
