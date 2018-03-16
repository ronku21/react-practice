import React,{Component} from 'react';
import { connect } from 'react-redux';
import { ChangePassword } from '../components';
import actions from '../actions';
import ValidateInput  from '../utilities/validations/passwordValidations';

let initialUser = {
    Oldpassword : '',
    password : ''
}

@connect((state) => state)
export default class ChangePasswordContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:initialUser,
            errors:{},
        }
  }

    isValid = () => {
       const {errors,isValid } = ValidateInput(this.state.user)

       if(!isValid){
           this.setState({errors})
       }

       return isValid
   }

   onChange = (e) => {
       let { user } = this.state;
       const { name , value } = e.target;
       this.setState({ user : {
           ...this.state.user,
           [name]: value
       }
   });
 }
// changePasswordUser
  userProfileSubmit = (e) =>{
       e.preventDefault();
       if(this.isValid() ){
           const { user } = this.state;
           let userId = localStorage.getItem("user")
           user['id'] = localStorage.getItem("user");

           console.log(userId._id,"user")

       }

   }


  render(){
       const {errors,user} = this.state
        return(
            <div>
            <ChangePassword
               changePasswordSubmit = {this.userProfileSubmit}
               user={user}
               errors={errors}
               onChange={this.onChange}
             />
            </div>
        )
    }
}
