import {FaMapMarkerAlt,FaPhoneAlt} from 'F:/consilio_react/node_modules/react-icons/fa';
import { Wrapper, StyledLink, Title, Button } from "./Styles";
// import Projects from './../Pages/Projects';
// import Services from './../Pages/Services';
// import Home from './../Pages/Home';
// import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter,FaInstagram, FaEnvelope, FaLinkedinIn} from "react-icons/fa";
// import Form from "./MailForm";
// import MailForm from "./MailForm";
const Footer=()=>{
    let insta="https://www.instagram.com/consilio.architects/";
    return(
        <Wrapper>
        <Title>Consilio Architects</Title>
        <div className="row">
            
            <div className="col-md-4" style={{paddingTop:20, paddingRight:90,color:'#8f8f8f'}}>
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



            <div className="col-md-4" style={{paddingTop:40}}>
               
               <p style={{color:'#8f8f8f'}}>We’re here to help our people, our clients, and our communities achieve their ambitions. So let us know what you’re interested in, or what you’re looking for, and we’ll get back to you shortly.</p>
               <Button><StyledLink to="/contact">Get In Touch...</StyledLink></Button>
            </div>









            <div className="col-md-4">
            <div style={{paddingTop:20}} className="row footerLinks">
            <div className="col-6">
                <ul>
                    <li><StyledLink to="/Consilio_Architects">Home</StyledLink></li>
                    <li><StyledLink to="/service">Services</StyledLink></li>
                    <li><StyledLink to="/project">Projects</StyledLink></li>
                    <li><StyledLink to="/about">About</StyledLink></li>
                </ul>
                </div>
                <div className="col-6">
                    <li><StyledLink><FaInstagram/></StyledLink></li>
                    <li><StyledLink><FaFacebookF/></StyledLink></li>
                    <li><StyledLink><FaLinkedinIn/></StyledLink></li>
                    <li><StyledLink><FaTwitter/></StyledLink></li>
                </div>
                </div>
            </div>
        </div>
        <p style={{color:'#8f8f8f'}}>© Copyright 2019 BK Constructions</p>
        </Wrapper>

    )
};
export default Footer;