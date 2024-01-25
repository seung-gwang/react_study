import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmpInsert(props) {
  const [emp, setEmp] = useState({});
  const navi = useNavigate();

  const inputHandler = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };

  const submitInsert = () => {
    axios({
      method: "post",
      url: "/rest/emp/insert.do",
      data: emp,
    })
      .then((rsp) => {
        rsp.data ? alert("입력완료.") : alert("입력안됨.");
        navi("/emp/list");
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  };

  return (
    <Form onSubmit={submitInsert}>
      <EmpForm
        colName="commissionPct"
        inputHandler={inputHandler}
        type="number"
      ></EmpForm>
      <EmpForm
        colName="departmentId"
        inputHandler={inputHandler}
        type="number"
      ></EmpForm>
      <EmpForm
        colName="email"
        inputHandler={inputHandler}
        type="email"
      ></EmpForm>
      <EmpForm
        colName="firstName"
        inputHandler={inputHandler}
        type="text"
      ></EmpForm>
      <EmpForm
        colName="hireDate"
        inputHandler={inputHandler}
        type="date"
      ></EmpForm>
      <EmpForm
        colName="jobId"
        inputHandler={inputHandler}
        type="text"
      ></EmpForm>
      <EmpForm
        colName="lastName"
        inputHandler={inputHandler}
        type="text"
      ></EmpForm>
      <EmpForm
        colName="managerId"
        inputHandler={inputHandler}
        type="number"
      ></EmpForm>
      <EmpForm
        colName="phoneNumber"
        inputHandler={inputHandler}
        type="text"
      ></EmpForm>
      <EmpForm
        colName="salary"
        inputHandler={inputHandler}
        type="number"
      ></EmpForm>

      <input
        onClick={submitInsert}
        className="btn btn-primary"
        type="button"
        value="저장하기"
      ></input>
    </Form>
  );
}

function EmpForm({ colName, inputHandler, type }) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>{colName}</Form.Label>
      <Form.Control
        defaultValue=""
        name={colName}
        onChange={inputHandler}
        type={type}
      />
    </Form.Group>
  );
}

export default EmpInsert;
