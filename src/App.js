// const title = 'My First React Element';
// const myTitleId = 'main-title';
// const desc = 'this is a Children.';
//
// const header = (
//   <header>
//     <h1 id={myTitleId} title={title}>
//       {title}
//     </h1>
//     {/*p 태그입니다. */}
//     <p className="main-desc">
//       {desc}
//     </p>
//   </header>
// );
//
//

// 함수 선언문
/*function Header(props) {
  return (
    <header>
       <h1>ScoreBoard</h1>
      <span className="stats">Players: 1</span>
     </header>
  )
}*/
/*const players = [
  {name:'KIM' , score : 30 , id : 1},
  {name:'ZES' , score : 20 , id : 2},
  {name:'QST' , score : 50 , id : 3},
  {name:'YES' , score : 90 , id : 4}
]*/


// 함수 표현식
import React from "react";
import './App.css';

const Header = (props) => {

  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  )
};

/*const Counter = (props) => {

  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  )
}*/

class Counter extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
    this.state = {
      score: 0
    };
    this.incrementScore();
  }

  // 초기화 아래처럼도 가능
  /*state = {
    score : 10
  }*/

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.decrementScore()}> -</button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> +</button>
      </div>
    );
  }

  // State 변경시 알아야되는 3가지
  // 1. setState 를 통해 값 변경
  // 2. 머지된다.
  // 3. 비동기

  // 증가 점수
  incrementScore = () => {
    this.setState((prevState) => {
      return {score: prevState.score + 1}
    });
  }
  // 감소 점수
  decrementScore = () => {
    this.setState((prevState) => {
      return {score: prevState.score - 1}
    });
  }
}

const Player = (props) => (

  <div className="player">
    <span className="player-name">
      {/*onClick 이벤트 : 함수 선언문이 들어가야된다. 아이디 값을 호출해야된다*/}
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>

    <span className="player-name">{props.name}</span>
    {/*모든 props를(파라미터값) 넘기려면 아래처럼 해주면된다. */}
    <Counter {...props}/>
  </div>
);

/*const App = (props) => (
  <div className="scoreboard">
    <Header title="My Scoreboard" totalPlayers={1 + 10}/>
    {/!*Player List*!/}
    {/!*<Player name="KIM" score={50}/>
    <Player name="KONG" score={20}/>
    <Player name="SANG" score={60}/>
    <Player name="MOO" score={80}/>*!/}
    {
      props.initialPlayers.map(player =>
        <Player name={player.name} score={player.score} key={player.id}/>
        )
    }
  </div>
);*/

class App extends React.Component {
  state = {
    players: [
      {name: 'KIM', /*score : 30 ,*/ id: 1},
      {name: 'ZES', /*score : 20 ,*/ id: 2},
      {name: 'QST', /*score : 50 ,*/ id: 3},
      {name: 'YES', /*score : 90 ,*/ id: 4}
    ]
  }

  //삭제 func
  handleRemovePlayer = (id) => {
    console.log(id);
    this.setState(prevState => ({
      players : prevState.players.filter(item => item.id !== id)
      //fillter = true 인것들만 모아서 새로운 배열을 만든다.

    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={1 + 10}/>
        {/*Player List*/}
        {/*<Player name="KIM" score={50}/>
    <Player name="KONG" score={20}/>
    <Player name="SANG" score={60}/>
    <Player name="MOO" score={80}/>*/}
        {
          this.state.players.map(player =>
            <Player name={player.name} score={player.score} key={player.id}
                    removePlayer={this.handleRemovePlayer} id={player.id}/>
          )
        }
      </div>
    )
  }
}


// 시간의 순으로 관리해야되기 때문에
// 플레이어 관리시 앱이 플레이어 4명을 prop가 아닌 state로 관리해야한다.

// ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
