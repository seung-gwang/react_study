import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BoardInsert(props) {
  const [board, setBoard] = useState({});
  const navi = useNavigate();
  const inputChangeHandler = (e) => {
    var newBoard = { ...board, [e.target.name]: e.target.value };
    setBoard(newBoard, [board]);
  };

  const handleInsert = () => {
    axios({
      method: "post",
      url: "/rest/webboard/insert.do",
      data: board,
    })
      .then((rsp) => {
        rsp.data ? alert("입력완료.") : alert("입력안됨.");
        navi("/board/list");
      })
      .catch((err) => {
        alert("error");
      });
  };
  return (
    <Form onSubmit={handleInsert}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Writer</Form.Label>
        <Form.Control
          defaultValue=""
          placeholder="Writer"
          name="writer"
          onChange={inputChangeHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          defaultValue=""
          placeholder="Title"
          name="title"
          onChange={inputChangeHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          defaultValue=""
          as="textarea"
          rows={3}
          name="content"
          onChange={inputChangeHandler}
        />
      </Form.Group>

      <input
        onClick={handleInsert}
        className="btn btn-primary"
        type="button"
        value="저장하기"
      ></input>
    </Form>
  );
}

export default BoardInsert;
