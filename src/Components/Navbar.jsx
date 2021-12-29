import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Services from './../Pages/Services';
// import Projects from './../Pages/Projects';
// import About from './../Pages/About';

class Navbar extends React.Component {
    render() {
        return (
            

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid" >
  
   <Link className="navbar-brand" to="/">Conselio Architects</Link>
   


    
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/project">Projects</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

      </ul>
      
 
    </div>
  </div>
</nav>





        
     
            );
    }
}
 
export default Navbar;
