import React from "react";
import axios from "axios";
import styles from './Heroes.module.scss';

export class Heroes extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.

    this.state = {
      heroes:[]
    }
  }


  render() {
    return (
      <ul className={styles["img-box"]}>
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id} className="row align-items-center m-0">
              <div className="col-1 py-2">
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name} className="img-fluid rounded-circle"/>
              </div>
              <span className="col">{hero.name}</span>
            </li>
          ))
        }
      </ul>
    );
  }

  async getHeroes(){
    // hero 목록 가져오기
    // Promise 패턴
    // await axios.get('http://eastflag.co.kr:8080/api/heroes')
    //   .then(res => this.setState({heroes:res.data}));
    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    this.setState({heroes:res.data});
  }

  componentDidMount() {
    this.getHeroes();
  }
}
