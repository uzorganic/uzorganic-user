const developmentHost = 'http://localhost:4000';
const productionHost = 'https://api.uzorganic.com';

export const baseURL =
  process.env.NODE_ENV === 'production' ? productionHost : developmentHost;

export const cookieName = 'example-cookie';
