import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth_actions';


class Home extends Component {
  logout() {
    console.log(this.props)
    this.props.logoutUser();
    // console.log('logout');
  }
  
  render() {
    return (
      <div>
        Home
        <p onClick={this.logout.bind(this)}>Log Out</p>
      </div>
    );
  }
}

export default connect(null, actions)(Home);