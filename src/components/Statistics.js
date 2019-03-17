import React from "react";
import styles from '../pages/scoreboard/Scoreboar.module.css';

export const Statistics = (props) => {
  const totalPlayers = props.players.length;
  const totalScore = props.players.reduce((total, player) => total + player.score, 0);


  return (
    <table className={styles.stats}>
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
};