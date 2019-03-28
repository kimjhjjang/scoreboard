import React from "react";
import PropTypes from 'prop-types';
import {ADD_USER} from "../redux/actions";

export class Users extends React.Component {

  static propTypes = {
    idx : PropTypes.number,
    firstName : PropTypes.string,
    lastName : PropTypes.string,
    userName : PropTypes.string
  };


  render() {

    const {idx,firstName, lastName, userName} = this.props;

    console.log(this.props);
    return (
        <tr>
          <th scope="row">{idx}</th>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{userName}</td>
        </tr>
    );
  }
}
