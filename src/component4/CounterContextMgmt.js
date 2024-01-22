import React, { createContext, useContext, useState } from "react";

//전역 영역 생성
export const CounterContext = createContext();

//전역 영역 제공
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  const addHandler = () => setCount(count + 1);
  const minusHandler = () => setCount(count - 1);
  const [userName, setUserName] = useState("");
  const [myStyle, setMyStyle] = useState({
    border: "3px solid green",
    color: "red",
  });

  return (
    <div>
      <CounterContext.Provider
        value={{
          count,
          addHandler,
          minusHandler,
          userName,
          myStyle,
          setUserName,
          setMyStyle,
        }}
      >
        {props.children}
      </CounterContext.Provider>
    </div>
  );
};

export function CounterContextMgmt(props) {
  return (
    <div>
      <CounterProvider>
        <CountLabel></CountLabel>
        <PlusButton></PlusButton>
        <NameChange></NameChange>
      </CounterProvider>
    </div>
  );
}

function CountLabel() {
  const { count, userName } = useContext(CounterContext);
  return (
    <div>
      <h1>CountLabel 컴포넌트</h1>
      <p> {count}</p>
      <p>{userName}</p>
    </div>
  );
}

function PlusButton() {
  const { addHandler } = useContext(CounterContext);
  const { count } = useContext(CounterContext);
  return (
    <>
      <div>plus</div>
      <button onClick={addHandler}>더하기</button>
    </>
  );
}

function NameChange() {
  const { setUserName, userName } = useContext(CounterContext);

  return (
    <div>
      <h1>nameChange : {userName}</h1>
      <input onChange={(e) => setUserName(e.target.value)}></input>
    </div>
  );
}
export default CounterProvider;
