import React, { Component } from "react";

function MyComponentD(props) {
  const arr = ["HTML", "CSS", "JS", "React"];
  return (
    <div>
      <h1> 부모 컴포넌트 </h1>
      <MyComponentD2 title="React" price="20000" subject={arr}></MyComponentD2>
      <MyComponentD2 title="React" price="20000" subject={arr}></MyComponentD2>
      <MyComponentD2 title="React" price="200000">
        첫번째 Child.
      </MyComponentD2>
      <MyComponentD3 title="Springboot" price={8888888}>
        {" "}
        <strong>두번쨰 자식</strong>
      </MyComponentD3>
    </div>
  );
}

class MyComponentD3 extends Component {
  constructor(props) {
    super(props); //반드시 부모 생성자를 호출해야 합니다. super(props)
    this.myname = "leo";
    this.age = 20;
    console.log("My Component D3 생성자");
  }
  render() {
    const { title, price, children } = this.props;
    return (
      <div>
        <h1> MY COMPONENT D3</h1>
        <p>TITLE : {this.props.title}</p>
        <p>PRICE : {this.props.price}</p>
        <p>Children : {this.props.children}</p>
        <h1>{title}</h1>
        <h1>{price}</h1>
        <h3> this.myname ... {this.myname}</h3>{" "}
        {/*클래스로 component를 만든다*/}
      </div>
    );
  }
}

function MyComponentD2(parameters) {
  //함수 매개변수는 사용자가 정할 수 있음, 주의 : arguments는 예약어
  const { title, price, children, subject } = parameters; //비구조화 할당
  const myname = "leo";
  var age = 20;

  return (
    <div>
      <h1>{children}</h1>
      <h1>이너므 자식, 이너므 자식!! 컴포넌트</h1>
      <p>타이틀 : {parameters.title}</p>
      <p>가격 : {parameters.price}</p>
      <p>타이틀 : {title}</p>
      <p>가격 : {price}</p>
      <p> D2 myname = {myname}</p>
      {/*function으로  component를 만들기*/}
      <ul>
        {subject && subject.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default MyComponentD;
