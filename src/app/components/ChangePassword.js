import React,{Component} from 'react';
import {Form,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import {InputField , FormButton} from '../components';

const ChangePassword = (props) => {
    const {
           changePasswordSubmit,
           onChange,
           user,
           errors,
      } = props
  return(
    <div className="profileCss">
     <Col componentClass={ControlLabel}  smOffset={3} sm={6}>
     <h3 className="editProfileCss">Change Password</h3>
     <Form onSubmit={changePasswordSubmit}>

     <InputField
     type="password"
     required={true}
     name="Oldpassword"
     label="Old Password"
     value={user.Oldpassword}
     error = {errors.Oldpassword}
     onChange={onChange}
     />

     <InputField
      type="password"
      required={true}
      name="password"
      label="New Password"
      value={user.password}
      error = {errors.password}
      onChange={onChange}
      />

      <Col sm={4} smOffset={3}>
            <FormButton
            type="submit"
            block={true}
            title="Save"
            />
     </Col>
     </Form>
     </Col>
     </div>
  )
}


export default ChangePassword
