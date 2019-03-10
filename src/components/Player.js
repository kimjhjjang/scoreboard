import React from "react";
import {Counter} from "./Counter";

export class Player extends React.Component {

  render() {
    console.log(this.props.name, 'rendered');

    //객체 분해 할당
    const {removePlayer,name,score,id,changeScore} = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>X</button>
        </span>
        <span className="player-name">{name}</span>
        {/*모든 props를 넘길려면 { ...props}*/}
        <Counter score={score}
                 id={id}
                 changeScore={changeScore}/>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps : ', nextProps );
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextProps);
    return nextProps.score !== this.props.score;
  }
};