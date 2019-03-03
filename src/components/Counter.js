import React from "react";


class Counter extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
    this.state = {
      score: 0
    };
  }


  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.decrementScore()}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> +</button>
      </div>
    );
  }

  // 증가 점수
  incrementScore = () => {
    this.setState((prevState) => {
      return {score: prevState.score + 1}
    });
  }
  // 감소 점수
  decrementScore = () => {
    this.setState((prevState) => {
      return {score: prevState.score - 1}
    });
  }
}
