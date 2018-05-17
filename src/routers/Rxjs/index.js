import React from 'react';

import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

const CounterView = ({count, onIncrement, onDecrement}) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

class RxCounter extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {count: 0};

    this.counter = new Subject(); // Subject对象同时具备observable 和 observe 的特性
    const observer = value => this.setState({count: value});// 作为订阅者接受消息
    this.counter.scan((result, inc) => result + inc, 0)// scan会记录每次流向下流的结果
      .subscribe(observer);
  }

  render() {
    return <CounterView
      count={this.state.count}
      onIncrement={()=> this.counter.next(1)}// 使用next向所有的this.counter的订阅者推送消息
      onDecrement={()=> this.counter.next(-1)}
    />
  }
}

export default RxCounter;