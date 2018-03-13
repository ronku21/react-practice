import React from 'react';
import {FormControl,FormGroup,Col} from 'react-bootstrap';

const InputField = (props) => {
   let {
      type,
      placeholder,
      name,
      value,
      error,
      onChange,
      xs,
      sm,
      md,
      label,
      className,
      id,
      required,
      smOffset,
      mdOffset,
      xsOffset,
      style
   }= props;


   return(
    <Col xs={xs} sm={sm} md={md} smOffset={smOffset} mdOffset={mdOffset} xsOffset={xsOffset} className={className}>
     <FormGroup>
         {label?
          <span><label  style={{ color:'darkorange'}} htmlFor={id}>{label}</label>{required?<sup style={{ 'color':'darkorange'}}>*</sup>:null}</span>
          :
          null
        }
       {type!== 'textarea'?<FormControl
       type={type}
       placeholder={placeholder}
       name={name}
       value={value}
       onChange={onChange}
       className={className}
       id={id}
       />:
       <FormControl
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        id={id}
        componentClass="textarea"
        >
        </FormControl>
     }
     {error && <span style={{'color':'#7c0404'}}>{error}</span>}
     </FormGroup>
   </Col>
   )
}
export default InputField
