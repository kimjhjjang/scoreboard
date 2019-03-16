import React from "react";
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";


class AddPlayerForm extends React.Component {

  textInput = React.createRef();


  handleSubmit = (e) =>{
    console.log(e);
    e.preventDefault(); // submit에 기본 동작을 차단.
    this.props.addPlayer(this.textInput.current.value);
    // form 초기화
    // this.setState({playerName :''});
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput}
        placeholder="enter a player's name"
        required
        />
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: (name) => dispatch(addPlayer(name))
  }
}

export default connect(null,mapDispatchToProps)(AddPlayerForm);