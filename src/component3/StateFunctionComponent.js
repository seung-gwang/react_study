import React, { useState } from "react";

function StateFunctionComponent(props) {
  //Top level에서만 Hooks 사용 가능 - 일반 함수에서는 불가능
  const [count, setCount] = useState(0); //count=0
  const [message, setInfo] = useState("버튼 누르면 값이 바뀐다!!");

  const f1 = () => {};
  const plus = () => {
    setCount(count + 1);
  };

  const btnClick = (event) => {
    let opc = event.target.innerHTML;

    if (opc === "+") {
      setCount(count + 1);
      setInfo("Plus");
      return;
    }

    setCount(count - 1);
    setInfo("Minus");
  };

  return (
    <div>
      <h1>StateFunctionComponent</h1>
      <p>
        {" "}
        curVal : {count} Message:{message}
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={plus}>+</button>
      <button onClick={btnClick}>-</button>
    </div>
  );
}

export default StateFunctionComponent;
