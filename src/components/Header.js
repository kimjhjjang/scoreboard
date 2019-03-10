import React from "react";
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";

// props 객체 분해 할당
const Header = ({title,players,updateTitle }) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1 onClick={() => updateTitle("Test ScoreBoard")}>{title}</h1>
      <StopWatch/>
    </header>
  );
};

Header.propTypes = {
  title : PropTypes.string.isRequired,
  players : PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number,
    score:PropTypes.number,
    name:PropTypes.string
  }))
};

Header.defaultProps = {
  title : 'ScoreBoard'
}

let mapStateToProps = (state) => ({
  title : state.playerReducer.title
});

/*let mapActionToProps = (dispatch) =>({
  updateTitle: (name) => dispatch(updateTitle(name))
});*/

export default connect(mapStateToProps, {updateTitle})(Header);