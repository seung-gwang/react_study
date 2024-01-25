import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter1 from "./ReducerTest1";
import BoardProps from "./BoardProps";
import BoardPropsReducer from "./BoardPropsReducer";
import { BoardContextManagement } from "./BoardContextManagement";
import SmartHome from "component3/SmartHome";

function Day4Home(props) {
  return (
    <div>
      <Routes>
        <Route path="/reducer1" element={<Counter1 />}></Route>
        <Route path="/reducer2" element={<BoardProps />}></Route>
        <Route path="/reducer3" element={<BoardPropsReducer />}></Route>
        <Route path="/reducer4" element={<BoardContextManagement />}></Route>
        <Route path="/reducer5" element={<SmartHome />}></Route>
        <Route path="/smart-home" element={<SmartHome />}></Route>
      </Routes>
    </div>
  );
}

export default Day4Home;
