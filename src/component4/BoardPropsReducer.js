import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//전역으로 관리하는 영역
export const BoardContext = createContext();
const emptyBoard = {
  bno: 0,
  title: "",
  content: "",
  writer: "",
  active: false,
};

const initBoard = {
  board: emptyBoard,
  boardList: [
    {
      bno: 1,
      title: "월요일",
      content: "너무좋아",
      writer: "거짓말 아니야",
      active: false,
    },
  ],
};

function boardReducer(state, action) {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        board: { ...state.board, [action.name]: action.value },
      };
    case "ADD":
      return {
        ...state,
        boardList: state.boardList.concat(action.board),
        board: emptyBoard,
      };
    //boardList:[...boardList, action.board]
    case "DEL":
      return {
        ...state,
        boardList: state.boardList.filter((b) => b.bno !== action.bno),
      };
    case "UPDATE":
      return {
        ...state,
        boardList: state.boardList.map((b) =>
          b.bno === action.bno ? { ...b, active: !b.active } : b
        ),
      };
    default:
      return state;
  }
}

function BoardPropsReducer(props) {
  const [state, dispatcher] = useReducer(boardReducer, initBoard);
  const { board, boardList } = state;
  //내부에서 데이터 상태 관리 : useState()

  /*board라는 것의 상태를 관리하도록 함.
  초기값은 emptyBoard로 함
  */

  var nextBno = useRef(1); //렌더링 될 때 초기화 하지 말도록 함.
  /*값이 바뀔 때 사용*/
  const changeHandler = (e) => {
    dispatcher({ type: "INPUT", name: e.target.name, value: e.target.value });
  };

  const delHandler = (bno) => {
    dispatcher({ type: "DEL", bno });
  };

  const updateHandler = (bno) => {
    dispatcher({ type: "UPDATE", bno });
  };

  const addHandler = () => {
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
    dispatcher({ type: "ADD", board: newBoard });
    nextBno.current++;
  };

  return (
    <div>
      <InputBoard
        changeHandler={changeHandler}
        addHandler={addHandler}
        board={board}
      ></InputBoard>
      <DisplayBoard
        boardList={boardList}
        delHandler={delHandler}
        updateHandler={updateHandler}
      ></DisplayBoard>
    </div>
  );
}

export function InputBoard({ changeHandler, addHandler, board }) {
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

function MyButton({ addHandler }) {
  return (
    <Button variant="info" onClick={addHandler}>
      Add2
    </Button>
  );
}

export function DisplayBoard({ boardList, delHandler, updateHandler }) {
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

export default BoardPropsReducer;
