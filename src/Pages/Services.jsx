import Footer from "F:/conselio_react/src/Components/Footer.jsx";
import React from "react";
import 'F:/conselio_react/src/Pages/Services.css';
import Consulting from 'F:/conselio_react/src/img/Download premium image of Business people talking in a consultation 2020108.jpg';
import Construction from 'F:/conselio_react/src/img/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash.jpg';
import Structure from 'F:/conselio_react/src/img/ryan-ancill-nGsVMkRatgM-unsplash.jpg';
import Interior from 'F:/conselio_react/src/img/Departamentos en Renta en Distrito Federal, CDMX.jpg';
import { Wrapper } from "../Components/Styles";
const Services = () =>{
    return(
        <>
        
        <div className="container-fluid serv">
        <h1>OUR SERVICES</h1>
      
        <div className="row int">
            <div className="col-sm-4 ">
                <img src={Interior} height={350} width={400}/>
            </div>
            <div className="col-sm-8 description">
            <h2>Interior Design</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        
        

        <div className="row strc">
            <div className="col-sm-8 description">
            <h2>Structural Design</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           
            </div>
            <div className="col-sm-4 ">
            <img src={Structure} height={350} width={400}/>
             </div>
        </div>

        <div className="row cons">
            <div className="col-sm-4 ">
                <img src={Construction} height={350} width={400}/>
            </div>
            <div className="col-sm-8 description">
            <h2>Construction</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>


        <div className="row consult">
            <div className="col-sm-8 description">
            <h2>Consulting</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           
            </div>
            <div className="col-sm-4">
            <img src={Consulting} height={350} width={400}/>
             </div>
        </div>

        </div>
       
        <Footer/>
        </>
        

    );
};


export default Services;