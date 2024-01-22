import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Counter1 from "./ReducerTest1";
import BoardProps from "./BoardProps";
import BoardPropsReducer from "./BoardPropsReducer";
import { BoardContextManagement } from "./BoardContextManagement";
import SmartHome from "component3/SmartHome";

function Day4Home(props) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/day4/reducer1">Counter1</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/reducer1" element={<Counter1 />} />
        {/* Add other Routes as needed */}
      </Routes>
    </>
  );
}

export default Day4Home;
