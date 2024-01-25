import React, { Component } from "react";

function YourComponent1(props) {
  const { myname, myage, hobby } = props;
  return (
    <>
      <div>내 이름은.... {myname}</div>
      <div>내 나이는.... {myage}</div>
      <h1> 취미들 </h1>
      <ul>{hobby && hobby.map((item, idx) => <li key={idx}> {item}</li>)}</ul>
    </>
  );
}

export class YourComponent2 extends Component {
  constructor(props) {
    super(props);
    this._myname = props.myname;
  }
  render() {
    const { myname, myage, hobby } = this.props;
    return (
      <>
        <div>내 이름은.... {myname}</div>
        <div>내 나이는.... {myage}</div>
        <h1> 취미들 (class형태) </h1>
        <div> 이것은 멤버필드 myname... {this._myname}</div>
        <ul>{hobby && hobby.map((item, idx) => <li key={idx}> {item}</li>)}</ul>
      </>
    );
  }
}

export default YourComponent1;
