import {axiosInstance} from './config';
// 所有的请求都在这里统一管理
// axios
// url改了怎么办？
// 首页
export const getBannerRequest=()=>{
    return axiosInstance.get('/banner')
}

export const getRecommendListRequest=()=>{
    return axiosInstance.get('/personalized')
}

// singers
// export const getSingleListReauest=()=>{
//     return axiosInstance.get('/personalized')
// }