import React, { useState } from "react";
import { InputGroup, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FunctionComponent1(props) {
  const [color, setColor] = useState("red");
  const [message, setMessage] = useState("state관리 연습");
  const [mystle, setMystle] = useState({
    color: "blue",
    border: "1px solid red",
  });

  const handleColorChange = (event) => {
    let cc = event.target.innerHTML;
    setColor(cc);
    setMystle({ color: cc, border: `1px solid ${cc}` });
  };

  return (
    <div>
      <button onClick={handleColorChange}>RED</button>
      <button onClick={handleColorChange}>GREEN</button>
      <button onClick={handleColorChange}>BLUE</button>

      <h1 style={{ color }}>{message}</h1>
      <h1 style={mystle}>{message}</h1>
    </div>
  );
}

export function FunctionComponent2(props) {
  const [member, setMember] = useState({ name: "아무개", age: 30 });
  const inputChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
        <Form.Control
          placeholder="이름 입력하시오"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={inputChange}
          name="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">나이</InputGroup.Text>
        <Form.Control
          placeholder="나이를 입력하시오"
          aria-label="age"
          aria-describedby="basic-addon1"
          onChange={inputChange}
          name="age"
        />
      </InputGroup>
      <h1>
        입력정보 : 이름 : {member.name} 나이 : {member.age}
      </h1>
    </div>
  );
}

export function FunctionComponent3(props) {
  const [userName, setUserName] = useState("홍길동");
  const [sendMessage, setSendMessage] = useState("반갑습니다.");

  const initMemo = { username: userName, message: sendMessage };
  const [memo, setMemo] = useState(initMemo);

  const [memoList, setMemoList] = useState([memo]);
  const inputChange = (e) => {
    if (e.target.name === "username") {
      setUserName(e.target.value);
    } else {
      setSendMessage(e.target.value);
    }

    setMemo({ ...memo, [e.target.name]: e.target.value });
  };

  const messageChangeHandler = (e) => {
    setSendMessage(e.target.value);
  };
  const clearListener = (e) => {
    setUserName("");
    setSendMessage("");
  };

  const memoAdd = () => {
    setMemoList([...memoList, memo]);
  };

  return (
    <div>
      <h2>이름은 {userName}</h2>
      <h2>메시지는 {sendMessage}</h2>
      <input
        type="text"
        placeholder="이름입력"
        value={userName}
        onChange={inputChange}
        name="username"
      ></input>
      <input
        type="text"
        placeholder="message입력"
        value={sendMessage}
        onChange={inputChange}
        name="message"
      ></input>
      <div>
        Memo : {memo.name} .... {memo.message}
      </div>

      <button variant="success" onClick={memoAdd}>
        담기
      </button>
      <button onClick={clearListener}>지우기</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>name</th>
            <th>message</th>
          </tr>
        </thead>
        <tbody>
          {memoList.map((item, index) => (
            <tr>
              <td>{item.username}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FunctionComponent1;
