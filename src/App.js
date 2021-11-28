import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Counter from './counter';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [0],
      sum: 0
    };

    this.changeValue = this.changeValue.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);
  }

  getSum(counters) {
    this.setState({sum: counters.reduce((sum, i) => sum + i, 0)});
  }

  changeValue(value, index) {
    let counters = [...this.state.counters];
    counters.splice(index, 1, value);
    this.setState({counters});
  }

  deleteCounter(index) {
    let counters = [...this.state.counters];

    counters.splice(index, 1);

    counters = counters.map((value) => {
      if (value % 2 === 1) {
        return value - 1;
      }
      return value;
    })
    this.setState({counters});
  }

  addCounter() {
    let counters = [...this.state.counters];

    counters = counters.map((value) => {
      if (value % 2 === 0) {
        return value + 1;
      }
      return value;
    })
    this.setState({counters: [...counters, 0]});
  }

  render() {
    let counters = this.state.counters.map((value, i) => <Counter index={i} value={value} changeValue={this.changeValue} deleteCounter={this.deleteCounter}/>)
    const sum = this.state.counters.reduce((sum, i) => sum + i, 0);
    return (
      <div>
        <div className="wrapper__buttons">
          <button onClick={this.addCounter}>Add counter</button>
          <button onClick={() => this.setState({counters: []})}>Reset</button>
        </div>
        <div className="wrapper__info">
          <h3>number of counters</h3>
          <h1>{counters.length}</h1>
          <h3>sum of counters</h3>
          <h1>{sum}</h1>
        </div>
        <div className="wrapper__counters">
          {counters}
        </div>
      </div>
    );
  }
} 

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
