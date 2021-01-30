import axios from 'axios';

// const NEWSAPI_BASE_URL = process.env.VUE_APP_NEWS_API;
// const NEWSAPI_BASE_URL = 'https://newsapi.org/v2';
// Using CORS anywhere to bypass block from API
const NEWSAPI_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2';

const httpClient = axios.create({
  baseURL: `${NEWSAPI_BASE_URL}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export default httpClient;
