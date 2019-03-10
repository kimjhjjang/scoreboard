import React from "react";
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";
import PropTypes from 'prop-types';
// props 객체 분해 할당
export const Header = ({title,players}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
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