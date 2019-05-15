// 文字情報のみ
// exportする関数で使用したい
import { INCREMENT,DECREMENT } from '../actions'

// 状態
const initialState = { value: 0 }

/**
 * 関数をexport
 * 
 * stateとactionを渡せる
 */
export default (state = initialState, action) => {
  switch (action.type){
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
    default:
      return state
  }
}