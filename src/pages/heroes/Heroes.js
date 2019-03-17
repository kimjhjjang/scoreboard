import React, {Fragment} from "react";
import axios from "axios";
import styles from './Heroes.module.scss';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css';

export class Heroes extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.

    this.state = {
      pageSize: 10,
      totalCount: 115,
      currentPage: 1,
      heroes: []
    }
  }


  render() {
    return (
      <>
        <div className="card-columns">
          {this.state.heroes.map(hero => (
            <div className="card" key={hero.hero_id}>
              <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                   style={{width: '100%'}} alt={hero.name}></img>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
          ))}

        </div>
        <Pagination current={this.state.currentPage} total={this.state.totalCount} pageSize={this.state.pageSize}
        onChange={this.handleChange}/>
      </>
    );
  }

  handleChange = (current, pageSize) => {
    this.setState({currentPage : current});
    this.getHeroes();
  }

  async getHeroes(){
    // hero 목록 가져오기
    // Promise 패턴
    // await axios.get('http://eastflag.co.kr:8080/api/heroes')
    //   .then(res => this.setState({heroes:res.data}));

    const start_index= (this.state.currentPage-1) * this.state.pageSize;

    const res = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes?` +
      `start_index=${start_index}&page_size=${this.state.pageSize}`);

    this.setState({
      heroes:res.data.data,
      totalCount : res.data.total
    });
  }

  componentDidMount() {
    this.getHeroes();
  }
}
