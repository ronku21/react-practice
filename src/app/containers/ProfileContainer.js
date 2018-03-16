import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Profile } from '../components';
import actions from '../actions';
import ValidateInput  from '../utilities/validations/profileValidations';

let initialUser = {
    firstName :'',
    lastName : '',
    mobile_number : '',
    occupation : '',
    address : '',
    city : '',
    country : ''
}

@connect((state) => state)
export default class ProfileContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:initialUser,
            profile_pic:'',
            errors:{},
            successMessage : false
        }
  }

 /**
  * componentDidMount
  * @return {void}
  */
 componentDidMount() {
   actions.getUserProfile().then(res => {
        let userData = {
            firstName : res.res.firstName,
            lastName : res.res.lastName,
            mobile_number : res.res.mobile_number,
            occupation : res.res.occupation == null ? '' : res.res.occupation,
            address : res.res.address == null ? '' : res.res.address,
            city :  res.res.city == null ? '' : res.res.city,
            country :res.res.country == null ? '' : res.res.country
        }

         this.setState({user : userData});
   })
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

 fileInputChange = (e) => {

     const formData = new FormData();
     formData.append('profile_pic',e.target.files[0])

      this.setState({profile_pic:e.target.files[0]})

     actions.updateProfilePicUser(formData).then((response)=>{
         if(response.statusCode == 200){
           swal("Success",response.message,'success');
           console.log(this.state,"dfgdfgdf")

        //    setTimeout(function(){
        //       this.props.history.push('/home')
        //    }.bind(this),2000)
         }else{
             swal("error",response.message,'error')
         }
    })
 }

 userProfileSubmit = (e) =>{
       e.preventDefault();
       if(this.isValid() ){
           const { user } = this.state
         actions.updateProfileUser(user).then(res => {
            if(res.statusCode == 200){
                swal("Success",res.message,"success");
                this.setState({errors : {}})
                setTimeout(function() {
                    this.props.history.push('/home')
                }.bind(this),2000);
            }else{
                swal("Error",res.message,"error");
            }
         })
       }

   }


  render(){
       const {errors,user} = this.state
        return(
            <div>
            <Profile
               userProfileSubmit = {this.userProfileSubmit}
               user={user}
               errors={errors}
               onChange={this.onChange}
               fileInputChange={this.fileInputChange}
               renderMessage={this.renderMessage}
             />
            </div>
        )
    }
}
