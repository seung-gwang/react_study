import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const BoardContext = createContext();

//전역으로 관리하는 영역
export function BoardContextManagement(props) {
  return (
    <>
      <BoardProvider>
        <h1>here</h1>
        <InputBoard></InputBoard>
        <DisplayBoard></DisplayBoard>
      </BoardProvider>
    </>
  );
}

export function BoardProvider(props) {
  //내부에서 데이터 상태 관리 : useState()
  const emptyBoard = {
    bno: 0,
    title: "",
    content: "",
    writer: "",
    active: false,
  };

  /*board라는 것의 상태를 관리하도록 함.
  초기값은 emptyBoard로 함
  */
  const [board, setBoard] = useState(emptyBoard);

  const [boardList, setBoardList] = useState([]);
  var nextBno = useRef(1); //렌더링 될 때 초기화 하지 말도록 함.
  /*값이 바뀔 때 사용*/
  const changeHandler = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const delHandler = (bno) => {
    setBoardList(boardList.filter((board) => board.bno !== bno));
  };

  const updateHandler = (bno) => {
    setBoardList(
      boardList.map(
        (board) =>
          board.bno === bno ? { ...board, active: !board.active } : board // ...board -> 원래꺼
      )
    );
  };

  const addHandler = useCallback(() => {
    if (board.title === "" || board.content === "" || board.writer === "") {
      alert("빈칸, 채우시오.");
      return;
    }
    /* 
    setBoard로 하는경우 board가 갱신되지 않은 채 
    setBoardList가 호출되어 bno가 그대로 들어갈 수 있음 (주의!)
    */
    //setBoard({ ...board, bno: nextBno + 1 });
    const newBoard = { ...board, bno: nextBno.current }; //비동기 문제 처리법.

    setBoardList([...boardList, newBoard]); //setXXX는 비동기처리 됨.

    nextBno.current++;
    setBoard(emptyBoard);
  }, [boardList, board, emptyBoard]);

  return (
    <>
      <BoardContext.Provider
        value={{
          changeHandler,
          addHandler,
          board,
          boardList,
          delHandler,
          updateHandler,
        }}
      >
        {props.children}
      </BoardContext.Provider>
    </>
  );
}

export function InputBoard() {
  const { changeHandler, addHandler, board } = useContext(BoardContext);
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Title"
          aria-label="Title"
          aria-describedby="basic-addon2"
          name="title"
          onChange={changeHandler}
          value={board.title}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Content"
          aria-label="Content"
          aria-describedby="basic-addon2"
          name="content"
          onChange={changeHandler}
          value={board.content}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Writer"
          aria-label="Writer"
          aria-describedby="basic-addon2"
          name="writer"
          onChange={changeHandler}
          value={board.writer}
        />
      </InputGroup>
      <MyButton addHandler={addHandler}></MyButton>
      {/* <Button variant="info" onClick={addHandler}>
        Add
      </Button>{" "} */}
    </div>
  );
}

function MyButton() {
  const { addHandler } = useContext(BoardContext);
  return (
    <Button variant="info" onClick={addHandler}>
      Add2
    </Button>
  );
}

export function DisplayBoard() {
  const { boardList, delHandler, updateHandler } = useContext(BoardContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>bno</th>
          <th>title</th>
          <th>content</th>
          <th>writer</th>
          <th>active</th>
          <th> btn </th>
        </tr>
      </thead>
      <tbody>
        {boardList &&
          boardList.map((item, idx) => (
            <tr key={idx}>
              <td>{item.bno}</td>
              <td style={{ color: item.active ? "red" : "blue" }}>
                {item.title}
              </td>
              <td>{item.content}</td>
              <td>{item.writer}</td>
              <td>{item.active.toString()}</td>
              <td>
                <Button variant="danger" onClick={() => delHandler(item.bno)}>
                  Delete
                </Button>{" "}
                <Button
                  variant="success"
                  onClick={() => updateHandler(item.bno)}
                >
                  Update
                </Button>{" "}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}