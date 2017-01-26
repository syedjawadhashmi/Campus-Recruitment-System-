/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component,PropTypes } from 'react'

import { connect } from 'react-redux';
import UsersList from '../../components/userList/userList';
import LoginForm from '../../components/signinform/signinform'

class user extends Component {
static propTypes = {
      auth: PropTypes.object.isRequired,
  }
    render () {



   const { dispatch, users ,auth } = this.props;

        return (

            <div>
                <h4>This is sj user { this.props.auth.user.email } </h4>
                  <UsersList
        dispatch={ dispatch }
        users={ users }
      />
            </div>
        )
    }
}




const mapStateToProps = (state) => {
  //console.log(state)
	return { 
        auth: state.auth ,
        users: state.users
        };
};

export default connect(mapStateToProps)(user);