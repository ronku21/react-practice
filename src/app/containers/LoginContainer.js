import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Login } from '../components';
import actions from '../actions';
import ValidateInput  from '../utilities/validations/loginValidations';
import swal from 'sweetalert';

let initialUser = {
    email:'',
    password:''
}

@connect((state) => state)
export default class LoginContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: initialUser,
            errors: {},
        }

    }

    componentDidMount() {
        actions.getCategories();
    }


    isValid = () => {
        const { errors,isValid } = ValidateInput(this.state.user);

        if(!isValid){
            this.setState({errors});
            console.log('error');
        }

        return isValid;
    }


      onChange = (e) => {
      	let { user } = this.state;
      	const { name, value } = e.target;
      	this.setState({ user: {
                  ...this.state.user,
                  [name]: value
              }
          });
      }

    loginSubmit = (e) => {
          e.preventDefault();
          if(this.isValid()){
          const {user} = this.state;
          actions.loginUser(user).then(res => {
              this.setState({ errors: {}});
              if(res.statusCode == 200){
                swal("Success",res.message,"success");
                this.setState({ user: initialUser });
            }else{
               swal("Oops", res.message, "error");
            }
          });
        }
     }



    render(){
        const { categories = [] } = this.props.auth;
        const {user,errors} = this.state;
        return(
         <div>
             <Login
              loginSubmit={this.loginSubmit}
              onChange={this.onChange}
              user={user}
              errors={errors}
             />
         </div>



        )
    }
}
