import axios from "axios";

export function request(config) {
    // 1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://152.136.185.210:8000/api/h8',
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })
  // 拦截请求
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  },err => {
    // console.log(err)
  })
  // 拦截响应
  instance.interceptors.response.use(res => {
    // console.log(res.data)
    return res.data
  },err => {
    console.log(err)
  })
  return instance(config)
}
