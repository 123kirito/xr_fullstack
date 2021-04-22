import axios from '../utils/axios'

export function register(params){
    axios.post('/user/register',params)
}
export function login(params){
    return axios.post('/user/login',params)
}