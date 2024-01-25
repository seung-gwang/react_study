import React, { Component } from "react";

export const MyFunc = function () {
  return (
    <div>
      <p>MyFunc</p>
    </div>
  );
};

class Content extends Component {
  display() {
    console.log("class에서 함수 추가함.");
  }

  render() {
    return (
      <section>
        <article>
          <h1>React 학습</h1>
          <p>Props</p> <p>state</p>
          <p>Component</p>
          <hr></hr>
        </article>
      </section>
    );
  }
}

export default Content;
