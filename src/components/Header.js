import React from "react";
import {Statistics} from "./Statistics";
import {StopWatch} from "./StopWatch";

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