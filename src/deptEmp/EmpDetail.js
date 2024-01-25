import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function EmpDetail(props) {
  const { employeeId } = useParams();
  const { employee, setEmployee } = useState({});

  const navi = useNavigate();
  const changeHandler = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value }, [employee]);
  };

  console.log(employeeId);

  return (
    <div>
      <EmployeeDetailDisplay
        employee={employee}
        employeeId={employeeId}
        changeHandler={changeHandler}
        //handleSubmit={handleSubmit}
        //handleDelete={handleDelete}
      ></EmployeeDetailDisplay>
    </div>
  );
}

function EmployeeDetailDisplay({
  employee,
  children,
  employeeId,
  //changeHandler,
}) {
  return (
    <div>
      {children}
      {employeeId}
      {employee}

      {/* <>
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
      </> */}
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

export default EmpDetail;
