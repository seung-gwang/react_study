import React, { useReducer, useState } from "react";

//action : type에 따라 동작을 결정
function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

//직접 상태 관리 : useState ... 단순한 작업일때 좋음
//분리된 상태 관리 : useReducer
function Counter1(props) {
  const [su, dispatch] = useReducer(reducer, 0);
  const plusHandler = () => dispatch({ type: "PLUS" });
  const minusHandler = () => dispatch({ type: "MINUS" });
  return (
    <div>
      <h1>useState 이용하기!</h1>
      <p>현재 값 : {su}</p>
      <button onClick={plusHandler}> 더하기 </button>
      <button onClick={minusHandler}> 뺴기 </button>
    </div>
  );
}

export default Counter1;
