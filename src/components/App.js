import React,{ Component } from 'react'
import { connect } from 'react-redux'

// 実行すると {type: 'INCREMENT' } が返って来る

import { increment,decrement } from '../actions'

class App extends Component {

  render() {

    const props = this.props
    console.log(props);

    return (
      <React.Fragment>
        <div>count: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// state combineReducers( count2 )
// stateをpropsに紐づける
const mapStateToProps = state => {
  console.log(state);
  return { value: state.count2.value }
}

// propsに関数をくっつける（？）
const mapDispatchToProps = dispatch => {
 
  return {
    // props.incrementと呼ばれたら 
    // count.js で exportしている関数を呼ぶ
    // 第一引数は自動で state 
    // 第二引数で increment()、decrement()
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
