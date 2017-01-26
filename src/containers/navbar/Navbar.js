import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


import {browserHistory} from 'react-router';
// ...

// Components
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
const buttonStyle = { color: 'white' }

export default class Navbar extends Component {


    state = {
        open: false
    }


    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});



  render () {

      const mainMenu = (
      <div className='Navbar-Main-Menu' >
        <FlatButton
          label='Sign Up'
          style={buttonStyle}
          onClick={() => browserHistory.push('/signup')}
        />
        <FlatButton
          label='Login'
          style={buttonStyle}
          onClick={() => browserHistory.push('/signin')}
        />
      </div>
    )



   /* return (
      <AppBar
      title={
          <Link to='/' style={buttonStyle}>
            iq
          </Link>
        }
        className='Navbar'
        iconElementRight={mainMenu}
      />
    )*/

      return(
          <div>

          <AppBar title="Campus Recuritment System" className='Navbar' iconElementRight={mainMenu} />
        
          </div>
      )

  }
}
