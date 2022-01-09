
import { Wrapper, StyledLink, Title } from "./Styles";
import Projects from './../Pages/Projects';
import Services from './../Pages/Services';
import Home from './../Pages/Home';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter,FaInstagram, FaEnvelope, FaLinkedinIn} from "react-icons/fa";
const Footer=()=>{
    let insta="https://www.instagram.com/consilio.architects/";
    return(
        <Wrapper>
        <div className="row">
            <div className="col-md-4">
               <Title>Consilio Architects</Title>
            </div>
            <div className="col-md-8">
            <div className="row footerLinks">
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
        </Wrapper>

    )
};
export default Footer;