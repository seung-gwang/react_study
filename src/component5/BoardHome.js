import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BoardList from "./BoardList";
import { Button } from "react-bootstrap";
import BoardInsert from "./BoardInsert";
import BoardDetail from "./BoardDetail";

function BoardHome(props) {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <Link to="list">
            {" "}
            <Button variant="info">목록보기</Button>
          </Link>
        </li>
        <br></br>
        <li>
          {" "}
          <Link to="insert">
            {" "}
            <Button variant="info">입력</Button>
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/list" element={<BoardList></BoardList>} />
        <Route path="/insert" element={<BoardInsert></BoardInsert>} />
        <Route path="/detail/:bno" element={<BoardDetail></BoardDetail>} />
      </Routes>
    </div>
  );
}

export default BoardHome;
