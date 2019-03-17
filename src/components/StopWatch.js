import React from "react";
import styles from '../pages/scoreboard/Scoreboar.module.css';

export class StopWatch extends React.Component {
  tickRef;

  state = {
    isRunning: false,
    timer: 0
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({timer: prevState.timer +1}));
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }

  handleReset = () => {
    this.setState({timer: 0});
  }

  render() {
    return (
      <div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <span className={styles["stopwatch-time"]}>{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }

  // DOM이 렌더링된 직후
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // 파괴되기 직전 호출
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }
}