import React from "react";
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component {

/*  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      players: prevState.players.changeScorefilter(item => item.id !== id)
    }))
  }*/

  render() {
    return (
      <div className="scoreboard">
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
    )
  }
}

let mapStateToProps = (state) => ({
  players : state.playerReducer.players
})

export default connect(mapStateToProps)(App);
