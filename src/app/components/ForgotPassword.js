import React,{Component} from 'react';
import { Modal,
        Button ,
        Form ,
        Col
      } from 'react-bootstrap';
import { InputField, FormButton,Login} from '../components';
import ValidateInput  from '../utilities/validations/loginValidations';
import { connect } from 'react-redux';
import actions from '../actions';
import swal from 'sweetalert';

let initialUser = {
      email:''
  }

@connect((state) => state)
export default class ForgotPassword extends Component{
    constructor(props){
        super(props);

        this.state = {
          user: initialUser,
          errors: {},
        };
    }

    isValid = () => {
        const { errors,isValid } = ValidateInput(this.state.user);
         if(!isValid){
            this.setState({errors});
        }
          return isValid;
    }

    onChange = (e) => {
      let { user } = this.state.user;
      const { name, value } = e.target;
      this.setState({ user: {
                ...this.state.user,
                [name]: value
            }
        });
    }

    onUpdatePassword = (e) =>  {
        e.preventDefault();
       if(this.isValid()){
         const { user } = this.state;
         actions.forgotPassword(user).then(res => {
            if(res.statusCode == 102){
                this.props.handleModal();
                setTimeout(function() {
                    swal("Success",res.message,"success");
                }.bind(this), 1000);
            }else{
                swal("Error",res.message,"error");
           }
         })
         this.setState({errors:{}})
         console.log("I am in Valid state")
     }
   }

    render(){
        return(
            <div>
            <Modal show={this.props.modalStatus} onHide={this.props.handleModal} className="formgroup">
            <Modal.Header closeButton>
              <Modal.Title>Forgot Password</Modal.Title>
            </Modal.Header>
            <Form onSubmit={this.onUpdatePassword}>
            <Modal.Body>
            <Col sm={12} xs={12} lg={12} md={12} >
              <InputField
              type="email"
              label="Email"
              value={this.state.user.email}
              placeholder="Enter your Email"
              required={true}
              name="email"
              error={this.state.errors.email}
              onChange={this.onChange}
            />
           </Col>
            </Modal.Body>
            <Modal.Footer >
              <Button type="submit">Save</Button>
              <Button onClick={this.props.handleModal}>Close</Button>
            </Modal.Footer>
            </Form>
            </Modal>
         </div>
       )
     }
  }
