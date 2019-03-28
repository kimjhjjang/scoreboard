import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";
import {Index} from "./heroes/Index";
import Work from "./works/Work";

export class Root extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Menu></Menu>
        <div className="container" style={{backgroundColor: '#ffffff'}}>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/heroes" component={Index}/>
            <Route path="/scoreboard" component={Scoreboard}/>
            <Route path="/works" component={Work}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}