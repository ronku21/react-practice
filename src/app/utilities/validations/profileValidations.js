import Validator from 'is_js';
import {isEmpty} from 'lodash';

export default function ValidateInput(data){
       let errors = {};
       console.log(data,"data");


    if(Validator.empty(data.firstName)){
        errors.firstName = "FirstName is Required."
    }

    if(Validator.empty(data.lastName)){
        errors.lastName = "lastName is Required."
    }

    if(Validator.empty(data.mobile_number)){
        errors.mobile_number = "Mobile Number is Required."
    }

    if(Validator.empty(data.occupation)){
        errors.occupation = "Occupation is Required."
    }

    if(Validator.empty(data.country)){
        errors.country = "Country is Required."
    }

    if(Validator.empty(data.city)){
        errors.city = "City is Required."
    }


    if(Validator.empty(data.address)){
        errors.address = "Address is Required."
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}
