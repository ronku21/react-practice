import React,{Component} from 'react';
import{ Button,
        Col,
        Well,
        Alert,
        Image
    } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {Header} from '../components';
import { connect } from 'react-redux';
import actions from '../actions';



@connect((state) => state)
export default class Home extends Component{
    constructor(props){
      super(props);
  }

  /**
   * componentDidMount
   * @return {void}
   */
  componentDidMount() {
    actions.getUserProfile();
  }
   render(){
       const { userProfile = {} } = this.props.auth;
       const GETIMAGEURL = 'http://127.0.0.1:7500/Utils/uploads/' + userProfile.profile_pic

       console.log(GETIMAGEURL);

        return(
            <div>
             <Col className="textcss">
                 <br/>
                 <br/>
                 <Col xs={6} md={4}>
                 <Image className="userProfileCss"
                 src= {userProfile.profile_pic == undefined ? 'https://d2ln1xbi067hum.cloudfront.net/assets/default_user-abdf6434cda029ecd32423baac4ec238.png' :  GETIMAGEURL}
                 rounded />
                 </Col>

                 <Alert bsStyle="success" className="alertCss">
                       <strong>INSTASELL</strong> User Profile
                </Alert>
                <br/>
                <br/>

                <Col xs={6} md={4}>
                 <div>
                  <Well bsSize="large">
                    Name: {userProfile.firstName} {userProfile.lastName}
                    <br/>
                    Email: {userProfile.email}
                    <br/>
                    Mobile Number: {userProfile.mobile_number}
                    <br/>
                    Occupation: {userProfile.occupation == null ? 'N/A' : userProfile.occupation}
                    <br/>
                    Country: {userProfile.country == null ? 'N/A' : userProfile.country}
                    <br/>
                    City:  {userProfile.city == null ? 'N/A' : userProfile.city}
                 </Well>
                 </div>
                 </Col>


             </Col>
           </div>
        )
      }
  }
