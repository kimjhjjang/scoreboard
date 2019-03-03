import React from "react";


export class Counter extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.props.changeScore(this.props.id,-1)}> -</button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment"
                onClick={() => this.props.changeScore(this.props.id,+1)}> +</button>
      </div>
    );
  }
}
