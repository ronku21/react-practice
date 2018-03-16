import React,{Component} from 'react';
import {Form,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import {InputField , FormButton} from '../components';

const Profile = (props) => {
    const {
           userProfileSubmit,
           onChange,
           user,
           errors,
           fileInputChange,
           fileUpload,
      } = props
  return(
    <div>

    <Col componentClass={ControlLabel} sm={6}>
    <span>Profile Pic</span>
    <input type="file" name="profile_pic" onChange={fileInputChange} />
    </Col>


     <Col componentClass={ControlLabel}  smOffset={3} sm={6}>
     <h3 className="editProfileCss">Edit Profile</h3>
     <Form onSubmit={userProfileSubmit}>

     <InputField
     type="text"
     required={true}
     name="firstName"
     label="First Name"
     value={user.firstName}
     error = {errors.firstName}
     onChange={onChange}
     />

     <InputField
      type="text"
      required={true}
      name="lastName"
      label="Last Name"
      value={user.lastName}
      error = {errors.lastName}
      onChange={onChange}
      />

      <InputField
       type="text"
       required={true}
       name="mobile_number"
       label="Mobile Number"
       value={user.mobile_number}
       error = {errors.mobile_number}
       onChange={onChange}
       />

       <InputField
        type="text"
        required={true}
        name="occupation"
        label="Occupation"
        value={user.occupation}
        error = {errors.occupation}
        onChange={onChange}
        />

         <InputField
          type="text"
          required={true}
          name="address"
          label="Address"
          value={user.address}
          error = {errors.address}
          onChange={onChange}
          />

          <InputField
           type="text"
           required={true}
           name="country"
           label="Country"
           value={user.country}
           error = {errors.country}
           onChange={onChange}
           />

          <InputField
           type="text"
           required={true}
           name="city"
           label="City"
           value={user.city}
           error = {errors.city}
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


export default Profile
