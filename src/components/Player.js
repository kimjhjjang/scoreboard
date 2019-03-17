import React from "react";
import Counter from "./Counter";
import PropTypes from 'prop-types';
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";
import styles from '../pages/scoreboard/Scoreboar.module.css';


class Player extends React.Component {

  static propTypes = {
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score:PropTypes.number.isRequired,
    id:PropTypes.number,
    changeScore: PropTypes.func,
    addPlayer : PropTypes.func
  };

  render() {
    //객체 분해 할당
    const {removePlayer,name,score,id,changeScore} = this.props;

    return (
      <div className={styles.player}>
        <span className={styles["player-name"]}>
          <button className={styles["remove-player"]} onClick={() => removePlayer(id)}>X</button>
        </span>
        <span className={styles["player-name"]}>{name}</span>
        {/*모든 props를 넘길려면 { ...props}*/}
        <Counter score={score}
                 id={id}
                 changeScore={changeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    //console.log('componentWillReceiveProps : ', nextProps );
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    //console.log(nextProps);
    return nextProps.score !== this.props.score;
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    removePlayer : (id) => dispatch(removePlayer(id))
  }
}

export default connect(null, mapDispatchToProps)(Player);