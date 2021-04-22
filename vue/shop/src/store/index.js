import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  mutations: { // 放更改状态的函数
    addCount(state){
      state.count++;
    }

  },
  actions: {
    actionAddCount(ctx){ // ctx context上下文
      ctx.commit('addCount') // 提交mutations里面的方法
    }
  },
  modules: {
  }
})
