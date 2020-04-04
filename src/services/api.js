import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sundaerun.appspot.com/api'
},)

export default instance;
