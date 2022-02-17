import React from "react";
import Footer from "../Components/Footer";
import ServiceIcon from "../Components/ServiceIcon";

import Slides from "../Components/Slides";

import './Home.css';
import MailForm from './../Components/MailForm';

const Home = () =>{
    return(
        <>
        
        <Slides/>
        <ServiceIcon/>
        <MailForm/>
        <Footer/>
        </>



    );
};


export default Home;