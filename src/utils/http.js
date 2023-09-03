import axios from "axios";

const http = axios.create({
  baseURL: 'http://129.204.197.143:3000', // 注意这里的双斜杠
  timeout: 5000
});

// 请求拦截器
http.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

export default http;
