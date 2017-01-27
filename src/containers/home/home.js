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

        return (
            <div style={{display: 'inline-flex',margin:'20px'}}>
                <Card style={{width:'300px'}}>
                    <CardHeader title="Hyper Star"/>
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="abc.jpg"  style={{}}/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle=" Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.

                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
                <Card  style={{width:'300px',marginLeft:'5px',marginRight: '30px'}}>
                    <CardHeader title="Hyper Star"/>

                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="abc.jpg"  style={{}}/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
                <Card style={{width:'300px'}}>
                    <CardHeader title="Hyper Star"/>
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="abc.jpg"  style={{}}/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.

                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
                <Card  style={{width:'300px',marginLeft:'5px',marginRight: '30px'}}>
                    <CardHeader title="Hyper Star"/>

                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src="abc.jpg"  style={{}}/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
