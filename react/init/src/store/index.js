import { applyMiddleware, createStore, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 组件-> 中间1，中间2...-> store
// tree 单一状态树
const store=createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

export default store