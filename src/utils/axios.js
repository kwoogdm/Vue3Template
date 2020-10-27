"use strict";
import _axios from "axios";
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
  timeout: 10000, // request timeout
};

const axios = _axios.create(config);

//  请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['Accept'] = 'application/json'
    // let token = sessionStorage.getItem('loginToken') || null
    // if (token) {
    //   // 如果token不为null，否则传token给后台
    //   config.headers['Token'] = token
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    const res = response.data
    //届时根据后端返回success或者code值判断
    if (res.success === true) {
      return res
    } else {
      return res
    }
  },
  (error) => {
    //响应错误
    return Promise.reject(error)
  }
)
var typearr= {
  'json':'application/json;charset=UTF-8',
  'form':'application/x-www-form-urlencoded',
  'formdata':'application/multipart/form-data'
};
let ajax = {
  post (url, params,contype) {
    // loadinginstace = Loading.service({ fullscreen: true });
    return axios({
      method: 'post',
      url:url,
      data: params,
      headers:{
        'Content-Type': contype ? typearr[contype] : typearr['json']
      }
    }).then((response) => {
      return Promise.resolve(response); 
      },(e) => {
        return Promise.reject(e)
      })
  },

  get (url, params,contype) {
    // console.log(url);
    return axios({
      method: 'get',
      url:url,
      params: params,
      headers:{
        'Content-Type': contype ? typearr[contype] : typearr['json']
      }
    }).then((response) => {
      return Promise.resolve(response);  
      },(e) => {
        return Promise.reject(e)
      })
  },
  put(url, params,contype){
    return axios({
      method: 'put',
      url:url,
      data: params,
      headers:{
        'Content-Type': contype ? typearr[contype] : typearr['json']
      }
    }).then((response) => {
      if(response.status==200){
        return Promise.resolve(response.data);
      }    
    },(e) => {
        return Promise.reject(e)
      })
  },
  delete(url, params,contype){
    return axios({
      method: 'delete',
      url:url,
      data: params,
      headers:{
        'Content-Type': contype ? typearr[contype] : typearr['json']
      }
    }).then((response) => {
      if(response.status==200){
        return Promise.resolve(response.data);
      } 
      },(e) => {
        return Promise.reject(e)
      })
  },
  postImg: function (url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, params,{headers: {'Content-Type':'multipart/form-data'}})
        .then(res => {
          if(res.data.code == 1){//成功
            resolve(res.data)
          }
          
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default ajax;
