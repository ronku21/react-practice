import Validator from 'is_js';
import {isEmpty} from 'lodash';

export default function ValidateInput(data){
    let errors = {};

    if(Validator.empty(data.Oldpassword)){
      errors.Oldpassword = "Old Password is Required."
    }

    if(Validator.empty(data.password)){
      errors.password = "New Password is Required."
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }

}
