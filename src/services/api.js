import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://test.fuseclients.com/api'
},)

export default instance;
