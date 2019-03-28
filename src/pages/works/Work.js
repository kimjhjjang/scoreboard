import React from "react";
import {connect} from "react-redux";
import {Table} from 'reactstrap';
import {Users} from "../../components/Users";


class Work extends React.Component {

  constructor(props) {
     super(props);  // 부모 속성 초기화해야됨.
  }

  render() {

    return (
      <>
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
          {/*<Users users={this.props.users}  />*/}
          {
            this.props.users.map(users =>
              <Users firstName={users.firstName} lastName={users.lastName} userName={users.userName} idx={users.idx}
                      key={users.idx}
                      />)
          }

        </tbody>
      </Table>

      </>
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.workReducer.users

})

export default connect(mapStateToProps)(Work);
