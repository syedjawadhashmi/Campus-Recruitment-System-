/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component,PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import UsersList from '../../components/userList/userList';
import LoginForm from '../../components/signinform/signinform'
import { parkingActions } from '../../action/parking';
class user extends Component {
static propTypes = {
      auth: PropTypes.object.isRequired,
  }

    componentDidMount() {
        this.props.getParking()

    }
    showUsersList(users) {
        if(!users) {
            return [];
        }

        return Object.keys(users).reduce(
            (list, uid) => {
                return [
                    ...list,
                    {
                        uid,
                        ...users[uid]
                    }
                ];
            }, []);
    }
    render () {





   const { dispatch, parkings ,auth } = this.props;

        return (

            <div style={{display: 'inline-flex',margin:'20px'}}>


                {

                    this.props.parkings.isloaded ? this.showUsersList(this.props.parkings.parkingData).map(user =>

                            <Card  style={{width:'300px',marginLeft:'5px',marginRight: '30px'}}>
                                <CardHeader title="Hyper Star"/>

                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img src="abc.jpg"  style={{}}/>
                                </CardMedia>
                                <CardTitle title="Card title" subtitle="Card subtitle" />
                                <CardText>
                                    {user.name}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                </CardText>
                                <CardActions>
                                    <FlatButton label="Action1" />
                                    <FlatButton label="Action2" />
                                </CardActions>
                            </Card>


                        ): ''



               }
            </div>
        )
    }
}




const mapStateToProps = (state) => {
  console.log("users page "+state)
	return {

        auth: state.auth ,
        parkings: state.parkingData

        };
};

export default connect(mapStateToProps,parkingActions)(user);