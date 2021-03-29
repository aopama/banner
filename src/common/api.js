import axios from 'axios'

const node_env = {
    node_env: 'development',
    development: 'http://localhost:8081',//http://localhost:8081
}

axios.defaults.baseURL = node_env[node_env.development];
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//添加拦截器X-Requested-With: XMLHttpRequest

axios.interceptors.request.use(
    function (config) {
        // 设置统一的请求头
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
/**
 * 获取登录url
 */
const getUrl = () => {
    return axios.post('/apis/api/user/get-login-url');
}

export { getMenuList,getUrl }























