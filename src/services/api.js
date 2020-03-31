import axios from 'axios';
// import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://test.fuseclients.com'
})

// instance.interceptors.request.use(
//   async (config) => {
//     // if(slug){
//     //   config.baseURL = `http://test.fuseclients.com/api/blog/${slug}`;
//     // }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// )

export default instance;
