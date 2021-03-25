// 每个reducer 模块是个独立的小朝廷 reducer + action
import reducer from './reducer'; // 给reducer函数
import * as actionCreators from './actionCreators'; // action

export {reducer,actionCreators};