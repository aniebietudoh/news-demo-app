import httpClient from './httpClient';

const API_KEY = 'c308084f029940b5a12e75095549f601';

const fetchNews = (pageSize) => httpClient
  .get(`top-headlines?country=us&pageSize=${pageSize}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    throw error.response;
  });

export default fetchNews;
