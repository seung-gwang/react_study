import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function BoardList(props) {
  //데이터 상태 관리
  const [boardList, setBoardList] = useState([]);

  //lifeCycle 관리 : 최초 rendering 시 1회만 렌더링
  useEffect(
    () => {
      axios({
        method: "get",
        url: "/rest/webboard/list.do", //{proxy}/rest/webboard/list.do
      })
        .then((response) => {
          console.log(response.data);
          setBoardList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [
      /*boardList*/
    ]
  );

  return (
    <>
      <div>
        <BoardListDisplay boardList={boardList}></BoardListDisplay>
      </div>
    </>
    // <div>
    //   <h1>Board목록.</h1>
    // </div>
  );
}

function BoardListDisplay({ boardList }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>bno</th>
            <th>title</th>
            <th>content</th>
            <th>writer</th>
            <th>regDate</th>
            <th>updateDate</th>
          </tr>
        </thead>
        <tbody>
          {boardList &&
            boardList.map((board, idx) => (
              <tr key={`key${idx}`}>
                <td>
                  <Link to={`/board/detail/${board.bno}`}>{board.bno}</Link>
                </td>

                <td>{board.title}</td>
                <td>{board.content}</td>
                <td>{board.writer}</td>
                <td>{board.regdate}</td>
                <td>{board.updatedate}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BoardList;
