/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import style from '../../styles/styles.scss';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
const fieldStyle = { width: '50%' }

const styleo = {
  marginRight: 20,
  
};
export default class Home extends Component {
  state = {
    open: false,
  };




 handleSignup = e => {
    e.preventDefault()
    const { companyName,employeeName, salary,description } = this.state
   
    console.log(this.state)
    this.props.onSignup(this.state)
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
    render () {
const actions = [
      <FlatButton
          label="Add"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
    //   <FlatButton
    //         label="Cancel"
    //     secondary={true}
    //     onTouchTap={this.handleClose}
    //   />,
    ];
        return (
            <div>
<Dialog
          title="Add Companies Stakeholders"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <form   onSubmit={this.handleSignup}>
        
          <TextField
          hintText='Company Name'
          floatingLabelText='Company Name'
          onChange={({ target }) => { this.setState({companyName: target.value}) }}
          style={fieldStyle}
        />
        <TextField
          hintText='Employee Name'
          floatingLabelText='Employee Name'
          onChange={({ target }) => { this.setState({employeeName: target.value}) }}
          style={fieldStyle}
        />
    
        <TextField
          hintText='Salary'
          floatingLabelText='Salary'
          onChange={({ target }) => { this.setState({salary: target.value}) }}
          style={fieldStyle}
        />
        <TextField
          hintText='Descriptions'
          floatingLabelText='Descriptions'
          onChange={({ target }) => { this.setState({description: target.value}) }}
          style={fieldStyle}
          type='password'
        />
     
    
      </form>
        </Dialog>

<Card style={{margin: '16px'}}>
   

    <CardTitle style={{textAlign:'center'}} title="Companies Posts" subtitle="Sj pvt LtD" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
     <FloatingActionButton secondary={true} style={styleo} onTouchTap={this.handleOpen}  >
      <ContentAdd />
    </FloatingActionButton>

  
    </CardActions>
  </Card>
            </div>
        )
    }
}
