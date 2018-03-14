import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Register } from '../components';
import actions from '../actions';
import ValidateInput  from '../utilities/validations/registerValidations';
import swal from 'sweetalert';

let initialUser = {
    firstName:'',
    lastName:'',
    email:'',
    mobile_number:'',
    password:''
}

const path = "/sign-in"

@connect((state) => state)
export default class RegisterContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: initialUser,
            errors: {},
        }

    }


    componentDidMount() {
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

    registerSubmit = (e) => {
          e.preventDefault();
          if(this.isValid()){
          const {user} = this.state;
          user['user_type'] = "1"
          actions.registerUser(user).then(res => {
              this.setState({ errors: {}});
              if(res.statusCode == 200){
                swal("Success",res.message,"success");
                this.setState({ user: initialUser });
                setTimeout(function() {
                    this.props.history.push('/sign-in')
                }.bind(this), 3000);
            }else{
               swal("Oops", res.message, "error");
            }
          });
        }
     }



    render(){
        // const { categories = [] } = this.props.auth;
        const {user,errors} = this.state;
        return(
         <div>
             <Register
              registerSubmit={this.registerSubmit}
              onChange={this.onChange}
              user={user}
              errors={errors}
             />

            {/*<ul>
                 {categories.map((cat, key) => <li key={key}>{cat.title}</li>)}
             </ul>*/}
         </div>



        )
    }
}
