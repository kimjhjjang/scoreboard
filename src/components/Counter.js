import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/actions";


class Counter extends React.Component {


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


export default connect(null,{changeScore})(Counter);