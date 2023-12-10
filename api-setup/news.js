import { NEWS_GATEWAY_API } from './setupBase';

export const getTopTechnologyHeadline = () => {
  const url = '/everything';
  return NEWS_GATEWAY_API.get(url);
};
