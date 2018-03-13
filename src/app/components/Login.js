import React,{Component} from 'react';
import {
    Form,
    FormGroup,
    Col,
    FormControl,
    ControlLabel,
    Button,
    Row,
    Grid,
    Image
} from 'react-bootstrap';
import { InputField, FormButton } from '../components';

const Login = (props) =>{
    const {
          loginSubmit,
           onChange,
           user,
           errors,
      } = props
   return(
       <div>
        <Col className="textcss">
         <Col componentClass={ControlLabel}  smOffset={3} sm={6}>
         <Image className="registerImage" src="https://s-media-cache-ak0.pinimg.com/originals/a5/bf/e8/a5bfe8e5321e89e2281b6447a1846ebc.jpg"
         alt=""/>
        <Form onSubmit= {loginSubmit}>
        <InputField
        type="email"
        label="Email"
        value={user.email}
        placeholder="Enter your Email"
        required={true}
        name="email"
        smOffset={2}
        sm={9}
        error={errors.email}
        onChange={onChange}
      />

     <InputField
      type="password"
      label="Password"
      required={true}
      value={user.password}
      placeholder="Enter your Password"
      name="password"
      smOffset={2}
      sm={9}
      error={errors.password}
      onChange={onChange}
     />
     <Col smOffset={4} sm={5}>

        <FormButton
        type="submit"
        block={true}
        title="Login">
        </FormButton>

    </Col>
    </Form>
   </Col>
  </Col>
</div>
   )
}
export default Login
