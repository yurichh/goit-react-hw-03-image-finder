import axios from 'axios';

export const serviceImages = async (q, p) => {
  const resp = await axios(
    `https://pixabay.com/api/?q=${q}&page=${p}&key=39910711-abcee3e7f1b375d2c0a92cc23&image_type=photo&orientation=horizontal&per_page=12`
  );
  return resp;
};
// export const getProductsWithSearch = async query => {
//   const { data } = await axios(`/search?q=${query}`);
//   return data;
// };
