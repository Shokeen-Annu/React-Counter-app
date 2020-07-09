import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm mg-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
