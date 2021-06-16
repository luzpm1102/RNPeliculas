import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '4a9fe20408853b971beacff2ed424c11',
    language: 'es-ES',
  },
});

export default movieDB;
