import api from '../api';
import * as types from './action-types';
export const addGoods=(good)=>({
    type:types.ADD_GOODS,
    payload:{
        good
    }
})
// 页面上引入action useEffect
export const getGoods=()=>{
    return(dispatch)=>{
        api.getProducts((goods)=>{
            dispatch(addGoods(goods))
        })
        
    }
}

export const addToCart=(good)=>({
    type:types.ADD_SHOPCART,
    payload:{
        good
    }
})