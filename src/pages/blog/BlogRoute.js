import React, {Fragment} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Main} from "./Main";


export class BlogRoute extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
  }


  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/blog/main" component={Main}/>
          <Route path="/blog" render={() => <Redirect to="/blog/main"/>}/>
        </Switch>
      </Fragment>
    );
  }
}
