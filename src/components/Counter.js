import React from "react";
import PropTypes from 'prop-types';


export class Counter extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
  }

  render() {
    const {id, score, changeScore} = this.props;

    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => changeScore(id, -1)}> -
        </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment"
                onClick={() => changeScore(id, +1)}> +
        </button>
      </div>
    );
  }
}

Counter.propTypes ={
  id: PropTypes.number,
  score : PropTypes.number,
  changeScore : PropTypes.func
}