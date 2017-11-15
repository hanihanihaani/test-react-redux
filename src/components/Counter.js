import React, {Component} from 'react';
import PropTypes from "prop-types";

class Counter extends Component{
  static propTypes ={
    counter:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired,
  }
  addIfOdd(){
    if(this.props.counter % 2 === 0 ){
      return
    }
    this.props.onIncrement();
  }
  addAsync(){
    setTimeout(()=>this.props.onIncrement(),2000)
  }
  render(){
    const {counter,onDecrement,onIncrement} =this.props;
    return (
        <div>
          <h1>{counter}</h1>
          <button onClick={onIncrement}>+</button>{' '}
          <button onClick={onDecrement}>-</button>{' '}
          <button onClick={this.addIfOdd.bind(this)}>
          addIfOdd</button>{' '}
          <button onClick={this.addAsync.bind(this)}>
          addAsync</button>{' '}
        </div>
    )
  }
}

export default Counter;