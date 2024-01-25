import React, { Component } from "react";

class StateClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { su: 0 };
    //this.plus.bind(this);
    this.plus = this.plus.bind(this);
  }

  plus() {
    this.setState({ su: this.state.su + 1 });
    console.log("더하기?", this.state.su);
  }

  minus = (event) => {
    this.setState({
      su: this.state.su - 1,
    });
  };

  plusOrMinus = (event) => {
    const op = event.target.innerHTML;
    if (op === "+") {
      this.plus();
      return;
    }

    this.minus();
  };

  render() {
    const { su } = this.state;
    return (
      <div>
        <h1>StateClassComponent연습</h1>
        <p>cur val : {su}</p>
        <button onClick={() => this.setState({ su: su + 1 })}>+</button>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={() => this.setState({ su: su - 1 })}>-</button>

        <button onClick={this.plusOrMinus}>+</button>
        <button onClick={this.plusOrMinus}>-</button>
      </div>
    );
  }
}

export default StateClassComponent;
