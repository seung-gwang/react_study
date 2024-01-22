import React, { Component } from "react";

class StateTest extends Component {
  constructor() {
    super();
    this.state = { count: 0, message: "class를 이용한 state관리" };
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    //console.log(event.target.innerHTML);
    const inner = event.target.innerHTML;
    console.log(inner);
    if (inner === "증가") {
      this.setState({ count: this.state.count + 1, message: "Add를 수행했다" });
      return;
    }

    this.setState({
      count: this.state.count - 1,
      message: "Subtract를 수행했다",
    });
  };

  render() {
    const { count, message } = this.state;
    return (
      <div>
        <p>
          현재 값 : {count} ... {message}
        </p>
        <button
          onClick={() =>
            this.setState({ count: count + 1, message: "Add를 수행했다" })
          }
        >
          증가
        </button>
        <button onClick={this.handleClick}>증가</button>
        <button onClick={this.handleClick}>감소</button>
        <button>감소</button>
      </div>
    );
  }
}

export default StateTest;
