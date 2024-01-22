import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "./App";
import reportWebVitals from "reportWebVitals";
import MyComponentA from "component2/JSXTest";
import MyCar from "component1/MyCar";
import ComponentTest from "component1/ComponentTest";
import {
  MyComponentB,
  varTest,
  FuncTest1,
  FuncTest2,
  FuncTest3,
} from "component2/JSXTest";
import MyComponentC from "component2/CSSTest";
import MyComponentD from "component2/PropsTest";
import YourComponent1, { YourComponent2 } from "component2/YourComponent";
import StateTest from "component2/StateTest";
import StateClassComponent from "component3/StateClassComponent";
import StateFunctionComponent from "component3/StateFunctionComponent";
import FunctionComponent1, {
  FunctionComponent2,
  FunctionComponent3,
} from "component3/FunctionComponent1";
import LifeCycleClassComponent from "component3/LifeCycleClassComponent";
import LifeCycleFunctionComponent from "component3/LifeCycleFunctionComponent";
import { MyTimer } from "component3/MyTimer";
import MemoTest from "component3/MemoTest";
import CallbackTest from "component3/CallbackTest";
import SmartHome from "component3/SmartHome";
import BoardProps from "component4/BoardProps";

import { BoardContextManagement } from "component4/BoardContextManagement";
import ProviderTest, { LifeCycleProvider } from "component4/LifeCycleProvider";
import PropsAndContext from "component4/PropsAndContext";
import PropsAndContext2, { CountProvider } from "component4/PropsAndContext2";
import Counter1 from "component4/ReducerTest1";
import BoardPropsReducer from "component4/BoardPropsReducer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Day4Home from "component4/Day4Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
const hobbyArr = ["헬스", "런닝", "게임", "공부?", "밥먹기"];

const Day4HomeComp = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="/day4/timer">타이머</Link>
        </li>
        <li>
          <Link to="/reducer1">ruducer1</Link>
        </li>
        <li>
          <Link to="/day4">day4 home</Link>
        </li>
      </ul>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Day4HomeComp />} />
        <Route path="/day4/*" element={<Day4Home />}></Route>
        <Route path="/reducer1" element={<Counter1 />}></Route>
        <Route path="/reducer2" element={<BoardProps />}></Route>
        <Route path="/reducer3" element={<BoardPropsReducer />}></Route>
        <Route path="/reducer4" element={<BoardContextManagement />}></Route>
        <Route path="/reducer5" element={<SmartHome />}></Route>
        <Route path="/smart-home" element={<SmartHome />}></Route>
        <Route
          path="/reducer6"
          element={
            <>
              <SmartHome />
              <CallbackTest />
            </>
          }
        ></Route>
        <Route path="/reducer7" element={<MyTimer />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <PropsAndContext></PropsAndContext> */}
    {/* <Counter1></Counter1> */}
    {/* <BoardPropsReducer></BoardPropsReducer> */}

    {/* <CounterContextMgmt></CounterContextMgmt> */}
    {/* <BoardContextManagement></BoardContextManagement> */}
    {/* <LifeCycleProvider></LifeCycleProvider>
    <BoardContextManagement></ProviderTest> */}
    {/* <BoardContextMgmt></BoardContextMgmt> */}

    {/* <MyTimer></MyTimer> */}
    {/* <SmartHome></SmartHome>
    <CallbackTest></CallbackTest>
    <MemoTest></MemoTest>
    <LifeCycleFunctionComponent></LifeCycleFunctionComponent> */}
    {/* <LifeCycleClassComponent></LifeCycleClassComponent>
    <FunctionComponent2></FunctionComponent2>

    <FunctionComponent1></FunctionComponent1>

    <StateFunctionComponent></StateFunctionComponent>
    <StateClassComponent></StateClassComponent>
    <StateTest></StateTest>
    <YourComponent1 myname="Leo" myage={26} hobby={hobbyArr}>
      함수 컴포넌트로 만들기
    </YourComponent1>
    <YourComponent2 myname="Leo" myage={26} hobby={hobbyArr}>
      클래스 컴포넌트로 만들기
    </YourComponent2>
    <MyComponentC />
    <MyComponentD /> */}
    {/* <MyCar /> */}
    {/*
    <MyComponentA />
    <MyComponentB />
    <App />
    <ComponentTest />
    <FuncTest1></FuncTest1>
    <FuncTest2></FuncTest2>
    <FuncTest3></FuncTest3>
    */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
