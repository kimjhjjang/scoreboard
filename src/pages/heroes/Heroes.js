import React from "react";
import axios from "axios";

export class Heroes extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.

    this.state = {
      heroes:[]
    }
  }


  render() {
    return (
      <ul>
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id}>
              <img src={hero.photo} alt={hero.name}></img>
              <span>{hero.name}</span>
            </li>
          ))
        }
      </ul>
    );
  }

  getHeroes(){
    // hero 목록 가져오기
    axios.get('http://eastflag.co.kr:8080/api/heroes')
      .then(res => this.setState({heroes:res.data}));
  }

  componentDidMount() {
    this.getHeroes();
  }
}
