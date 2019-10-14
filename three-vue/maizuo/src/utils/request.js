import axios from 'axios'

// create an axios instance
let service = axios.create({
  baseURL: 'https://m.maizuo.com', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor----全局请求拦截
  service.interceptors.request.use(
    config => {
        config.headers['X-Client-Info'] = '{"a":"3000","ch":"1002","v":"5.0.4","e":"156767148210033043604248"}'
        if (config.data.xHost) {
          config.headers['X-Host'] = config.data.xHost
          delete config.data.xHost
        
        return config
      }
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )
// }

// response interceptor----全局响应拦截
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.status !== 0) {
      console.log('请求失败：', res.msg)
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
