import axios from 'axios'
import qs from 'qs';

axios.defaults.withCredentials = true
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.resolve(error.response)
})
const checkCodeStatus = (response) => {
    // 结束进度条或者加载动画
    if (response.status >= 200 && response.status <= 304) {
        // toast
        if (response.data.rntCode && response.data.rntCode !== 'OK') {
            $toast && $toast.showMsg(response.data.rntMsg);
        }
        return response;
    }
}

const checkCodeMsg = (res) => {
    if (res.code < 200 || res.code > 304) {
        $toast && $toast.showMsg('请求错误--from service.js')
    }
    console.log(res)
    return res;
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url: url,
            data: data,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(checkCodeStatus).catch(checkCodeMsg)
    }
}
