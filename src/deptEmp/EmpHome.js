import React from "react";
import { Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import EmpList from "./EmpList";
import EmpInsert from "./EmpInsert";

function EmpHome(props) {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="list">
            {" "}
            <Button variant="info">직원 목록</Button>
          </Link>
        </li>
        <br></br>
        <li>
          {" "}
          <Link to="insert">
            {" "}
            <Button variant="info">신규 직원 등록</Button>
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/list" element={<EmpList></EmpList>} />
        <Route path="/insert" element={<EmpInsert></EmpInsert>} />
      </Routes>
    </div>
  );
}

export default EmpHome;
