import React from "react";
import {Counter} from "./Counter";

export const Player = (props) => {
  return (
    <div className="player">
    <span className="player-name">
      {/*onClick 이벤트 : 함수 선언문이 들어가야된다. 아이디 값을 호출해야된다*/}
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>

      <span className="player-name">{props.name}</span>
      {/*모든 props를(파라미터값) 넘기려면 아래처럼 해주면된다. */}
      <Counter {...props}/>
    </div>
  )
};