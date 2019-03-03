import React from "react";
import {Counter} from "./Counter";


export const Player = (props) => {
  return (
    <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>
      <span className="player-name">{props.name}</span>
      {/*모든 props를 넘길려면 { ...props}*/}
      <Counter score={props.score}
                changeScore={props.changeScore} id={props.id}/>
    </div>
  );
};