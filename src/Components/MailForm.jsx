import React, { Component } from 'react';
import {  Container } from './Styles';
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button} from "semantic-ui-react";
import Swal from "sweetalert2";
import Footer from '../Components/Footer'
const SERVICE_ID = "service_7m5qdvt";
const TEMPLATE_ID = "template_zsan0gp";
const USER_ID = "user_UmVluPsmgERL6N88Ru1Xw";


class MailForm extends React.Component {
  
    render() { 
      const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully"
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            })
          });
        e.target.reset()
      };
        return (
               <>
              <Container>
              <div class="card ">
  <div class="card-header" style={{fontSize:50, paddingRight:60}}>
    Get In Touch
  </div>
  <div class="card-body">
  <form  onSubmit={handleOnSubmit}>
            <div class="form-group">
  
  <label for="name" >Name</label>
  <input name="user_name" type=" text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"/>
</div>


<div class="form-group">
    <label for="number">Phone Number</label>
    <input  name="user_message" type="text" className="form-control" id="number" placeholder="Enter Phone Number"/>
  </div>

  <div class="form-group">
  
    <label for="exampleInputEmail1" >Email address</label>
    <input name="user_message" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>

  <div class="form-group">
  
  <label for="name" >Work Description</label>
  <input  type="text"name="user_message" className="form-control" id="" aria-describedby="emailHelp" placeholder="Description..."/>
</div>
  
  
  <Button style={{marginTop:20}} type="submit" className="btn btn-primary">Send Us Mail</Button>
</form>

  </div>
</div>
              </Container>
     

</>
        );
    }
}




// import React from "react";
// import emailjs from "emailjs-com";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
// import Swal from "sweetalert2";

// const SERVICE_ID = "service_7m5qdvt";
// const TEMPLATE_ID = "template_zsan0gp";
// const USER_ID = "user_UmVluPsmgERL6N88Ru1Xw";
// const MailForm = () => {
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
//       .then((result) => {
//         console.log(result.text);
//         Swal.fire({
//           icon: "success",
//           title: "Message Sent Successfully"
//         })
//       }, (error) => {
//         console.log(error.text);
//         Swal.fire({
//           icon: "error",
//           title: "Ooops, something went wrong",
//           text: error.text,
//         })
//       });
//     e.target.reset()
//   };
// return (
//   <form onSubmit={handleOnSubmit}>
//   <label>
//     First Name
//     <input type="text" name="user_name" />
//   </label>
  
//   <label>
//     Last Name
//     <input type="text" name="user_name" />
//   </label>
//   <label>
//     Contact Number
//     <input type="text" name="user_message" />
//   </label>
//   <label>
//     Email Address
//     <input type="text" name="user_message" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
//   );

// }



 
export default MailForm;