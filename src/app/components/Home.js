import React,{Component} from 'react';
import{ Button,
        Col,
        Well,
        Alert,
        Image,
        Glyphicon,
        Grid,
        Row
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

  transferData = () => {
      this.props.history.push('/profile')
  }
   render(){
       const { userProfile = {} } = this.props.auth;
       const GETIMAGEURL = 'http://127.0.0.1:7500/Utils/uploads/' + userProfile.profile_pic

        return(
            <div className="textcss">
            <Grid>
            <Row>
             <Col xs={12} md={12}  className="col-md-12 text-center alert_box">
              <Col xs={12} md={12}  className="text-center">
              <Alert bsStyle="success">
                    <strong>INSTASELL</strong> User Profile
                    <div className="pull-right btn-edit">
                        <Button onClick={this.transferData}>
                          <Glyphicon glyph="edit" />
                        </Button>
                    </div>
             </Alert>
              </Col>

                 <Col xs={6} md={4} mdOffset={1} className="text-left">
                 <Image
                 src= {userProfile.profile_pic == undefined ? 'https://d2ln1xbi067hum.cloudfront.net/assets/default_user-abdf6434cda029ecd32423baac4ec238.png' :  GETIMAGEURL}
                 circle className="imageCss"/>
                 </Col>


                 <Col xs={6} md={6} className="pull-right">
                 <div>
                  <Well bsSize="large" className="wellSize">
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
             </Row>
             </Grid>
           </div>
        )
      }
  }
