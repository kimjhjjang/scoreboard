import React, {Fragment} from "react";
import {Nav, NavItem} from "reactstrap";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {Register} from "./Register";
import {Heroes} from "./Heroes";
import "./Index.scss";

export class Index extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
  }


  render() {
    return (
      <Fragment>
      <Nav className="mb-3">
        <NavItem>
          <NavLink to="/heroes" className="nav-link">Hero List</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
        </NavItem>
      </Nav>

        <Switch>
          <Route path="/heroes/hero" component={Heroes}></Route>
          <Route path="/heroes/Register" component={Register}></Route>
          <Route path="/heroes" render={() => <Redirect to="/heroes/hero"></Redirect>}></Route>
        </Switch>

      </Fragment>
    );
  }
}
