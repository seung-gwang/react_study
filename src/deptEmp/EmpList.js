import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function EmpList(props) {
  const [empList, setEmpList] = useState([]);
  useEffect(
    () => {
      axios({
        method: "get",
        url: "/rest/emp/list.do", //{proxy}/rest/webboard/list.do
      })
        .then((response) => {
          console.log(response.data);
          setEmpList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [
      /*boardList*/
    ]
  );
  return <EmpListDisplay empList={empList}></EmpListDisplay>;
}

function EmpListDisplay({ empList }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>employeeId</th>
            <th>commissionPct</th>
            <th>email</th>
            <th>firstName</th>
            <th>hireDate</th>
            <th>jobId</th>
            <th>lastName</th>
            <th>managerId</th>
            <th>phoneNumber</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {empList &&
            empList.map((emp, idx) => (
              <tr key={`key${idx}`}>
                <td>
                  <Link to={`/emp/detail/${emp.employeeId}`}>
                    {emp.employeeId}
                  </Link>
                </td>
                {/* <td>{emp.employeeId}</td> */}
                <td>{emp.commissionPct}</td>
                <td>{emp.email}</td>
                <td>{emp.firstName}</td>
                <td>{emp.hireDate}</td>
                <td>{emp.jobId}</td>
                <td>{emp.lastName}</td>
                <td>{emp.managerId}</td>
                <td>{emp.phoneNumber}</td>
                <td>{emp.salary}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EmpList;
