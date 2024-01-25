import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function BoardDetail(props) {
  const { bno } = useParams(); //
  const [board, setBoard] = useState({});
  const location = useLocation();
  const navi = useNavigate();
  const changehandler = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value }, [board]);
  };

  const handleDelete = (e) => {
    console.log(board);
    axios({ method: "delete", url: `/rest/webboard/delete.do/${board.bno}` })
      .then((rsp) => {
        alert("삭제 완료");
        navi("/board/list");
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //본래의 기능을 취소 (form의 input을 가지고 action을 수행하는 것을 막음)
    //대신 ajax(axios로 작업)
    axios({ method: "put", url: "/rest/webboard/update.do", data: board })
      .then((rsp) => {
        alert("수정 완료");
        console.log(rsp);
        navi("/board/list");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {}, [board]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/rest/webboard/detail.do/${bno}`,
    })
      .then((res) => {
        // console.log("res", res);
        console.log(res.data ? "수정 성공" : "수정 실패");
        setBoard(res.data);
      })
      .catch(() => {});
  }, [bno]);

  return (
    <div>
      <BoardDetailDisplay
        board={board}
        changehandler={changehandler}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      ></BoardDetailDisplay>
    </div>
  );
}

function FieldComponent({
  colName,
  data,
  changehandler,
  handleSubmit,
  handleDelete,
}) {
  return (
    <Form.Group as={Row} className="mb-3" controlId={colName}>
      <Form.Label column sm="2">
        {colName}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          value={data}
          name={colName}
          onChange={changehandler}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
        />
      </Col>
    </Form.Group>
  );
}

function BoardDetailDisplay({
  board,
  children,
  changehandler,
  handleSubmit,
  handleDelete,
}) {
  return (
    <div>
      {children}

      <>
        <Form onSubmit={handleSubmit}>
          <FieldComponent
            colName="bno"
            data={board.bno}
            plaintext
          ></FieldComponent>
          <FieldComponent
            colName="title"
            data={board.title}
            changehandler={changehandler}
          ></FieldComponent>
          <FieldComponent
            colName="content"
            data={board.content}
            changehandler={changehandler}
          ></FieldComponent>
          <FieldComponent
            colName="writer"
            data={board.writer}
            changehandler={changehandler}
          ></FieldComponent>
          <FieldComponent
            colName="regdate"
            data={board.regdate}
            plaintext
          ></FieldComponent>
          <FieldComponent
            colName="updatedate"
            data={board.updatedate}
            plaintext
          ></FieldComponent>

          <input
            className="btn btn-primary"
            type="submit"
            value="저장하기"
          ></input>

          {"    "}

          <Button type="button" variant="danger" onClick={handleDelete}>
            삭제하기
          </Button>
        </Form>
      </>
    </div>
  );
}

export default BoardDetail;
