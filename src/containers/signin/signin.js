import React, { Component, PropTypes } from 'react'

import { authActions } from '../../action/auth';
// Components
import LoginForm from '../../components/signinform/signinform'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

import {browserHistory} from 'react-router';
// redux/firebase
import { connect } from 'react-redux'

class signin extends Component {

 static propTypes = {
      auth: PropTypes.object.isRequired,
    signInWithCustom: PropTypes.func.isRequired
  }



 // Redirect when logged in
  componentWillReceiveProps (nextProps) {
  //console.log(nextProps)
    const { auth } = this.props;
    if (auth.isLoggedin && !nextProps.auth.auth.isLoggedin) {
     browserHistory.push('/signin')
    }
    else if (!auth.isLoggedin && nextProps.auth.auth.isLoggedin) {
     browserHistory.push('/user/'+nextProps.auth.auth.user.uid);
    }
  }

  handleLogin = (loginData) => {
    this.props.signInWithCustom(loginData)
    // browserHistory.push('/user')
  }


  render () {
      
    return (
      <div className='Login'>
        <Paper className='Login-Panel'>
          <LoginForm onLogin={this.handleLogin} />
        </Paper>
    
      </div>
    )
  }
}



//=====================================
//  CONNECT
//-------------------------------------


const mapStateToProps = (state) => {
  //console.log(state)
	return { auth: state };
};

export default connect(mapStateToProps, authActions)(signin);