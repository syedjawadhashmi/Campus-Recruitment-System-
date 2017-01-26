import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import {browserHistory} from 'react-router';
import { authActions } from '../../action/auth';

// Components
import SignupForm from '../../components/SignupForm/SignupForm'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'


 class signup extends Component {

  
  static propTypes = {
  
    registerWithCustom: PropTypes.func.isRequired
  }

  state = {
    snackCanOpen: false,
    errors: { username: null, password: null }
  }

 

  reset = () =>
    this.setState({
      errors: {},
      username: null,
      email: null,
      name: null
    })

  handleSignup = ({ email, password, username }) => {
    this.props.registerWithCustom({ email, password })
    browserHistory.push('/signin')
  }


  render () {

    return (
      <div className='Login' style={{marginLeft: '340px',marginTop: '67px',width: '50%'}}>
        <Paper className='Login-Panel'>
          <SignupForm onSignup={this.handleSignup} />
        </Paper>
      </div>
    )
  }



}


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(signup);