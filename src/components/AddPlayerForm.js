import React from "react";


export class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
    this.state = {
      playerName :''
    }
  }

  handleValueChange = (e) =>{
    this.setState({playerName: e.target.value});
  }

  handleSubmit = (e) =>{
    e.preventDefault(); // submit에 기본 동작을 차단.
    this.props.addPlayer(this.state.playerName);
    // form 초기화
    this.setState({playerName :''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.playerName}
        placeholder="enter a player's name"
        onChange={this.handleValueChange}
        required
        />
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}
