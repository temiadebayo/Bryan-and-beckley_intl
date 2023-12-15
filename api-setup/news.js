import { data } from './setupBase';

export const getTopTechnologyHeadline = () => {
  const url = '/everything';
  return data.get(url);
};
