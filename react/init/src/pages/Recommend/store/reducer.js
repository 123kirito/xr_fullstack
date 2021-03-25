import { actionCreators } from ".";

let defaultState={
    bannerList:[]
};
// reduce
// 静态页面 一个状态 -> 另一个状态的过程
// {type:'',data:''}
export default(state=defaultState,action)=>{
    console.log('??/',action);
    switch(action.type){
        case "CHANGE_BANNER":
            // 新的状态
            return {
                ...state,
                bannerList:action.data
            }
            // return state.bannerList=action.data;
        default:
            return state
    }
}