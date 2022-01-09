import Footer from "F:/consilio_react/src/Components/Footer.jsx";
import React from "react";
import 'F:/consilio_react/src/Pages/Services.css';
import Consulting from 'F:/consilio_react/src/img/Download premium image of Business people talking in a consultation 2020108.jpg';
import Construction from 'F:/consilio_react/src/img/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash.jpg';
import Structure from 'F:/consilio_react/src/img/ryan-ancill-nGsVMkRatgM-unsplash.jpg';
import Interior from 'F:/consilio_react/src/img/Departamentos en Renta en Distrito Federal, CDMX.jpg';
import { Title, Wrapper } from "../Components/Styles";
import { Container } from './../Components/Styles';
const Services = () =>{
    return(
        <>
        <Title primary>OUR SERVICES</Title>
        <Container primary>
        <div className="row row-cols-2 int">
            <div className="col-lg-4 col-sm-12 ">
                <img className="photo" src={Interior}   />
            </div>
            <div className="col-lg-8 col-sm-12 description">
            <Title primary>Interior Design</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        </Container>
        
        
        
        <Container>
        <div className="row row-cols-2 strc">
            <div className="col-lg-8 col-sm-12 description">
            <Title primary>Structural Design</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           
            </div>
            <div className="col-lg-4 col-sm-12 photo ">
            <img className="photo" src={Structure} />
             </div>
        </div>
        </Container>


        
        <Container primary>
        <div className="row row-cols-2 cons">
            <div className="col-lg-4 col-sm-12 photo ">
                <img className="photo" src={Construction} />
            </div>
            <div className="col-lg-8 col-sm-12 description">
            <Title primary>Construction</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        </Container>




        <Container>
        <div className="row row-cols-2 consult">
            <div className="col-lg-8 col-sm-12 description">
            <Title primary>Consulting</Title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           
            </div>
            <div className="col-lg-4 col-sm-12 ">
            <img className="photo" src={Consulting}  />
             </div>
        </div>
        </Container>

        {/* height={350} width={400}
height={350} width={400}
height={350} width={400}
height={350} width={400} */}
       
        <Footer/>
        </>
        

    );
};


export default Services;