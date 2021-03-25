// 与API 通信的地方
import {getBannerRequest} from '../../../api/request';

// com useEffect -> action -> api -> dispatch(action-type) -> reducer -> 新的值

export const changeBannerList=(data)=>({
    type:'CHANGE_BANNER',
    data:data
})
// 异步
export const getBannerList=()=>{
    return (dispatch)=>{
        getBannerRequest()
            .then(data=>{
                // dispatch 是有格式的
                // 同步
                console.log(data,'||||||')
                dispatch(changeBannerList(data.banners))
            })
    }
}