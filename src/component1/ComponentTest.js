import React from "react";
import Header, { Header2 } from "./Header";
import Menu, { score } from "./Menu";
import Content, { MyFunc } from "./Content";
function ComponentTest(props) {
  console.log("점수는" + score);
  return (
    <div>
      <Header />
      <Header2 />
      <Menu />
      <Content />
      <MyFunc />
    </div>
  );
}

export default ComponentTest;
