import Validator from 'is_js';
import {isEmpty} from 'lodash';

export default function ValidateInput(data){
    let errors = {};
   if(Validator.empty(data.email)){
       errors.email = "Email is Required."
   }

   if(Validator.empty(data.password)){
       errors.password = "Password is Required."
   }

   return{
       errors,
       isValid:isEmpty(errors)
   }
}
