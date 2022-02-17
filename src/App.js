import { Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
    <Navbar/>
  
    <Switch>
     <Route  exact path="/Consilio_Architects" component={Home} />
     <Route  exact path="/service" component={Services} />
     <Route  exact path="/about" component={About} />
     <Route  exact path="/project"  component={Projects} />
     <Route  exact path="/contact"  component={Contact} />
   </Switch>
  
    
   
    

    </div>
    
  );
}

export default App;
