import React, {Fragment} from "react";
import {Nav, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import Work from "./Work";
import {SignIn} from "./SignIn";


export class SignRoute extends React.Component {
  constructor(props) {
    super(props);  // 부모 속성 초기화해야됨.
  }


  render() {
    return (
      <Fragment>
        <Nav className="mb-3">
          <NavItem>
            <NavLink to="/heroes" className="nav-link">Works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/heroes/register" className="nav-link">Sign-in</NavLink>
          </NavItem>
        </Nav>

        <Switch>
          <Route path="/works/Work" component={Work}/>
          <Route path="/works/SignIn" component={SignIn}/>

        </Switch>

      </Fragment>
    );
  }
}
