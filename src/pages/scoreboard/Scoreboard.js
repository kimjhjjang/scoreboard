import React from "react";
import {connect} from "react-redux";
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import Header from "../../components/Header";
import styles from './Scoreboar.module.css';

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
  }


  render() {
    return (
      <div className={styles.scoreboard}>
        <Header players={this.props.players} />

        {/*Players List*/}
        {
          this.props.players.map(player =>
            <Player name={player.name} id={player.id} key={player.id}
                    score={player.score}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}/>)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(Scoreboard);