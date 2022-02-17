import React from "react";
import Footer from "../Components/Footer";
import MailForm from "../Components/MailForm";
import {FaMapMarkerAlt,FaPhoneAlt, FaEnvelope} from 'F:/consilio_react/node_modules/react-icons/fa';

const Contact = () =>{
    return(
    <>
        <MailForm/>
        <div className="row">
        <div className="col-6">
        <ul>
                <li className='row'>
                    <div className='col-3'><FaMapMarkerAlt/></div>
                    <div className='col-9'><p>9/808, Girdhar Marg, Jaipur 302017 </p></div>

               </li>
               <li className='row'>
                    <div className='col-3'><FaPhoneAlt/></div>
                    <div className='col-9'><p>+91 9511569204</p><p>+91 8600686380</p></div>

               </li>
               <li className='row'>
                    <div className='col-3'><FaEnvelope/></div>
                    <div className='col-9'><p>bkconstruction17@gmail.com</p></div>

               </li>
                
            </ul>
        </div>
        <div className="col-6"></div>
        

        </div>
        <Footer/>
    </>
        
    );
};


export default Contact;