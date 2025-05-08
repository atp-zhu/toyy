import { createSlice } from '@reduxjs/toolkit'

// 从本地存储获取初始数据
const getInitialState = () => {
  const savedGoodList = localStorage.getItem('goodList')
  return {
    goodList: savedGoodList ? JSON.parse(savedGoodList) : [],
    isShowCart: false
  }
}

const goodListStore = createSlice({
  name: 'goodList',
  initialState: getInitialState(),
  reducers: {
    isShowCartapi(state, action) {
      state.isShowCart = action.payload
    },
    addGoods(state, action) {
      const isGood = state.goodList.find(item => item.id === action.payload.id)
      if (isGood) {
        state.goodList.find(item => item.id === action.payload.id).num += action.payload.num
      } else {
        state.goodList.push(action.payload)
      }
      localStorage.setItem('goodList', JSON.stringify(state.goodList))
    },
    removeGoodsnum(state, action) {
      if (state.goodList.find(item => item.id === action.payload.id).num > 1) {
        state.goodList.find(item => item.id === action.payload.id).num -= 1
      } else {
        state.goodList = state.goodList.filter(item => item.id !== action.payload.id)
      }
      localStorage.setItem('goodList', JSON.stringify(state.goodList))
    },
    removeGoodsid(state, action) {
      state.goodList = state.goodList.filter(item => item.id !== action.payload)
      localStorage.setItem('goodList', JSON.stringify(state.goodList))
    },
    addGoodsnum(state, action) {
      state.goodList.find(item => item.id === action.payload.id).num += 1
      localStorage.setItem('goodList', JSON.stringify(state.goodList))
    }
  }
})

const { addGoods, removeGoodsnum, removeGoodsid, isShowCartapi, addGoodsnum } = goodListStore.actions
const reducer = goodListStore.reducer
export { addGoods, removeGoodsnum, removeGoodsid, isShowCartapi, addGoodsnum }
export default reducer
