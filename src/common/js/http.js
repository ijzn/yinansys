import axios from 'axios';
import qs from 'qs';
import router from '@/router/index';

const fetch = axios.create({
  timeout: 5000,
  baseURL: 'http://106.14.210.26:8082',
  // 请求头
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
});

// 添加请求拦截器  POST传参序列化
fetch.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 添加响应拦截器
 fetch.interceptors.response.use((res) => {
  // 对响应数据做点什么
  return res;
}, (err) => {
  /* switch (err.response.status) 
  {
    case 400: window.status = 400; err.message = '请求错误(400)'; break;
    // case 401: err.message = '未授权，请重新登录(401)'; break;
    // case 403: err.message = '拒绝访问(403)'; break;
    case 404: window.status = 404; err.message = '请求错误(404)'; break;
    // case 408: err.message = '请求超时(408)'; break;
    case 500: window.status = 500; err.message = '服务器错误(500)'; break;
    // case 501: err.message = '服务未实现(501)'; break;
    case 502: window.status = 502; break;
    // case 503: err.message = '服务不可用(503)'; break;
    // case 504: err.message = '网络超时(504)'; break;
    // case 505: err.message = 'HTTP版本不受支持(505)'; break;
    default: err.message = `连接出错(${err.response.status})!`;
  } */
  // 对响应错误做点什么
  // console.log('响应拦截器-err', err.message);
  return Promise.reject(err);
});
export default fetch;
