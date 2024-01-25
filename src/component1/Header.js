import React from "react";

function Header(props) {
  console.log("여기는 Header function");
  return (
    <div>
      <header>
        <h1>반갑습니다....</h1>
        <h2>React배우기전 선수지식은?</h2>
        <hr />
      </header>
    </div>
  );
}

export function Header2(props) {
  console.log("여기는 Header function");
  return (
    <div>
      <header>
        <h1>반갑소.</h1>
        <h2>리마동선 Linux Master DongSun, AKA. BigBlueBird</h2>
        <hr />
      </header>
    </div>
  );
}

export default Header;
