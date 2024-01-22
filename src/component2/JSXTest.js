import React, { Fragment } from "react";

function MyComponentA(props) {
  var score = 99;
  var a = null;
  var b = false;
  var c = undefined;
  var t = true;

  console.log(true && "hello"); // hello
  console.log(false && "hello"); // false
  console.log("hello" && "bye"); // bye
  console.log(null && "hello"); // null
  console.log(undefined && "hello"); //undefined
  console.log("" && "hello"); // ''
  console.log(0 && "hello"); // 0
  console.log(1 && "hello"); // hello

  //환경 변수
  console.log("public 경로~" + process.env.PUBLIC_URL);
  console.log("My name~" + process.env.REACT_APP_MYNAME);
  console.log("my email~" + process.env.REACT_APP_MY_EMAIL);
  console.log("MY_ADDRESS" + process.env.MY_ADDRESS); //Undefined -> 환경변수 명이 REACT_APP으로 시작해야함

  return (
    <Fragment>
      <h1> MyComponentA</h1>
      <div>Root가 한개여야 함.</div>
      <p>score : {score}</p>
      <p>빈 태그는 Fragment</p>
      <p>3항연산자 : {score >= 90 ? <b>합격!!!</b> : "불합격"}</p>
      <p>조건부 렌더링 : {score >= 90 && <b>합격</b>}</p>

      <p> null, false, undefined는 출력될까?</p>
      <p>
        {a} {b} {c} {t}
      </p>
      <p> 출력이 안된다... true도 안된다</p>
      {/* 주석은 이렇게 씁니다*/}
    </Fragment>
  );
}

export function MyComponentB(props) {
  const hobbyArr = ["농구", "축구", "골프", "공부"];
  const hobbyArr2 = hobbyArr.map((hobby, index) => (
    <li key={index}>{hobby}</li>
  ));

  function f(item, index) {
    return <li key={index}>{item}</li>;
  }
  const hobbyArr3 = hobbyArr.map(f);

  console.log(hobbyArr2);

  return (
    <>
      <div>
        <h1> ~나의 취미~</h1>
        <ul>
          {hobbyArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <hr />
        <ul>{hobbyArr2}</ul>
        <hr />
        <ul>
          {hobbyArr3}
          {f("야구", "A100")}
        </ul>
      </div>
    </>
  );
}

export const constTest = 100;
export var varTest = 200;
export function FuncTest1() {
  return <p>funcTest1</p>;
}
export function FuncTest2() {
  return <p>funcTest2</p>;
}
export const FuncTest3 = () => {
  return <p>funcTest3</p>;
};

export default MyComponentA;
