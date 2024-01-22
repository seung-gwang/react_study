import React, { createContext, useContext, useState } from "react";

// Create a context
const CountContext = createContext();

// Create a provider component
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to use the context
export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

// PropsAndContext component
export default function PropsAndContext2() {
  return (
    <CountProvider>
      <div>
        <Left1 />
        <hr />
        <Right1 />
      </div>
    </CountProvider>
  );
}

// Right1 component
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}

// Right2 component
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
}

// Right3 component
function Right3() {
  const { setCount, count } = useCount();

  return (
    <div>
      <h1>Right3</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
}

// Left1 component
function Left1() {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
}

// Left2 component
function Left2() {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
}

// Left3 component
function Left3() {
  const { count } = useCount();

  return (
    <div>
      <h1>Left3</h1>
      <p>count : {count}</p>
    </div>
  );
}
