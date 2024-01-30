import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3';
const key = '990f65d4b5c75dbe651b2313132afc99';
const AUTH_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTBmNjVkNGI1Yzc1ZGJlNjUxYjIzMTMxMzJhZmM5OSIsInN1YiI6IjY1YjA4NzVmYmU2ZDg4MDE5MjQzNzViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oYBs3neVCVVjTulFOpmWbGvpn35zZ7H_MYXlypOOuoM';

const endUrl = {
  trending: '/trending/movie/day',
  details: '/movie/ ',
  credits: '/credits',
  reviews: '/reviews',
  wordSearch: '/search/movie',
};

export const fetchTrending = async () => {
  try {
    const trendingFilms = await axios.get(
      `${baseURL}${endUrl.trending}?api_key=${key}&page=1&language=en-US&include_adult=false`
    );
    return trendingFilms.data.results;
  } catch (error) {
    console.log('Error', error.message);
  }
};
export const fetchMovieDetails = async movieId => {
  const options = {
    params: {
      language: 'en-US',
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };

  try {
    const response = await axios.get(`${baseURL}/movie/${movieId}`, options);
    return response.data;
  } catch (error) {
    console.log('Error during fetch:', error);
    throw error;
  }
};
export const getSearchMovies = async query => {
  try {
    const result = await axios.get(
      `${baseURL}${endUrl.wordSearch}?api_key=${key}&page=1&query=${query}&language=en-US&include_adult=false`
    );
    return result.data.results;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const searchForCast = async movieId => {
  try {
    const result = await axios.get(
      `${baseURL}${endUrl.details}${movieId}${endUrl.credits}?api_key=${key}&page=1&language=en-US&include_adult=false`
    );
    return result.data.cast;
  } catch (error) {
    console.error('Error:', error.message);
  }
};
export const searchReviews = async movieId => {
  try {
    const result = await axios.get(
      `${baseURL}${endUrl.details}${movieId}${endUrl.reviews}?api_key=${key}&page=1&language=en-US&include_adult=false`
    );
    return result.data.results;
  } catch (error) {
    console.error('Error:', error.message);
  }
};