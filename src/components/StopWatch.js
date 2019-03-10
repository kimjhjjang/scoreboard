import React from "react";


export class StopWatch extends React.Component {

  tickRef = '';

  state = {
    isRunning : false,
    timer : 0
  }

  tick = () => {
    if(this.state.isRunning){
      this.setState(prevState => ({timer:prevState.timer +1}));
    }
  }

  HandleReset = () =>{
    this.setState({timer:0});
  }

  HandleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>StopWatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.HandleStopwatch}>{this.state.isRunning ? "stop" : "Start"}</button>
        <button onClick={this.HandleReset}>Reset</button>
      </div>
    );
  }

  // DOM이  렌더링 된 직후
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // 파괴되기 직전 호출
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }


}

