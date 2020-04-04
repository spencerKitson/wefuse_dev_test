import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sundaerun.appspot.com/api'
},)

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
