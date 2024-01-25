import React from "react";
import "component2/My.css";
import { Button, Stack } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}

// or less ideally

//외부 CSS - <className="i">
//내부 CSS - inline, 반드시 객체일 것 {border : "1px solid gray"}
function MyComponentC(props) {
  const inlineStyle = {
    border: "3px dotted hotpink",
    color: "skyblue",
    fontSize: "30px",
  };

  return (
    <header style={{ border: "10px solid pink" }}>
      <h1 className="myStyle">반갑습니다....</h1>
      <h2 className="myStyle2">React배우기전 선수 지식은?</h2>
      <p style={inlineStyle}>Style연습..inline</p>
      <p style={inlineStyle} className="myStyle2">
        Style연습...class이름
      </p>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="info">
          hi
        </Button>
        <Button as="a" variant="success">
          hello
        </Button>
        <button type="button" className="btn">
          Basic
        </button>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </Stack>
    </header>
  );
}

export default MyComponentC;
