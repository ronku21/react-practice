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
import { InputField, FormButton,Login} from '../components';

const Register = (props) =>{
    const {
          registerSubmit,
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
          <Form onSubmit= {registerSubmit}>
          <InputField
          type="text"
          label="First Name"
          value={user.firstName}
          placeholder="Enter your First Name"
          required={true}
          name="firstName"
          smOffset={2}
          sm={9}
          error={errors.firstName}
          onChange={onChange}
        />

         <InputField
         type="text"
         label="Last Name"
         value={user.lastName}
         placeholder="Enter your Last Name"
         required={true}
         name="lastName"
         smOffset={2}
         sm={9}
         error={errors.lastName}
         onChange={onChange}
        />

        <InputField
        type="text"
        label="Mobile Number"
        value={user.mobile_number}
        placeholder="Enter your Mobile Number"
        required={true}
        name="mobile_number"
        smOffset={2}
        sm={9}
        error={errors.mobile_number}
        onChange={onChange}
      />

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
        title="Register">
        </FormButton>
    </Col>
    </Form>
   </Col>
  </Col>
</div>
   )
}
export default Register
