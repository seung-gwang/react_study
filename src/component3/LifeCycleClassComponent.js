import React, { Component } from "react";
import PropTypes from "prop-types";

class LifeCycleClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycleClassComponent constructor");
    this.state = { title: "준비", buttonVisible: false };
  }

  componentDidMount() {
    console.log("LifeCycleClassComponent componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleClassComponent shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifeCycleClassComponent componentDidUpdate - 수정됨");
  }

  componentWillUnmount() {
    console.log("LifeCycleClassComponent componentWillUnmount - 제거됨");
  }

  render() {
    console.log("LifeCycleClassComponent render - 렌더링");
    const { title, buttonVisible } = this.state;

    return (
      <div>
        <h1>LifeCycleClassComponent 연습</h1>
        <button
          onClick={() => this.setState({ title: "보임", buttonVisible: true })}
        >
          자식 컴포넌트 보이기
        </button>
        {buttonVisible && (
          <div>
            <LifeCycleClassComponent2 title={title}></LifeCycleClassComponent2>
            <button
              onClick={() =>
                this.setState({ title: "준비", buttonVisible: false })
              }
            >
              다시시작
            </button>
          </div>
        )}
      </div>
    );
  }
}

class LifeCycleClassComponent2 extends Component {
  constructor(props) {
    super(props);
    console.log("LifeCycleClassComponent constructor");
  }

  componentDidMount() {
    console.log("[자식]LifeCycleClassComponent componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[자식]LifeCycleClassComponent shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[자식]LifeCycleClassComponent componentDidUpdate - 수정됨");
  }

  componentWillUnmount() {
    console.log("[자식]LifeCycleClassComponent componentWillUnmount - 제거됨");
  }

  render() {
    console.log("[자식]LifeCycleClassComponent render - 렌더링");

    return (
      <div>
        <h1 style={{ backgroundColor: "orange" }}> 자식 컴포넌트 보이기</h1>
      </div>
    );
  }
}
LifeCycleClassComponent.propTypes = {};

export default LifeCycleClassComponent;
