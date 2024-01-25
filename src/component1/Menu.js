import React from "react";
export const score = 99;
function Menu(props) {
  console.log("여기는 Menu 컴포넌트");
  return (
    <div>
      <header>우리가 배운 front 과목.</header>
      <nav>
        <li>HTML5</li>
        <li>CSS5</li>
        <li>JavaScript</li>
      </nav>
    </div>
  );
}

export default Menu;
