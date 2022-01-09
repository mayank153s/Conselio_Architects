import {FaHardHat, FaDraftingCompass} from 'F:/consilio_react/node_modules/react-icons/fa';
import LivingRoom from 'F:/consilio_react/src/img/livingroom.png';
import LivingRoom1 from 'F:/consilio_react/src/img/livingroom (1).png';
import Consulting from 'F:/consilio_react/src/img/avatar.png';
import Consulting1 from 'F:/consilio_react/src/img/avatar (1).png';
import Draft from 'F:/consilio_react/src/img/draft.png';
import Helmet from 'F:/consilio_react/src/img/helmet.png';
import 'F:/consilio_react/src/Components/ServiceIcon.css';
import { Link } from 'react-router-dom';
import { Button } from './Styles';
const ServiceIcon =()=>{
    return(
        <>
        <div className='service'>
        <h1>SERVICES</h1>
        {/* <FaHardHat size={100}/> */}
        {/* <FaDraftingCompass size={100}/> */}
        {/* <img src={LivingRoom} height={100}/> */}
        {/* <img src={Consulting} height={95}/> */}

        <div className='row'>

        <div className='col-md-3'>
        <Link className="link" to="/service">
        <img src={LivingRoom1} height={100}/>
        </Link>
        <h3>Interior Design</h3>
        </div>


        <div className='col-md-3'>
        <Link className="link" to="/service">
        <img src={Consulting1} height={95}/>
        </Link>
        <h3>Consulting</h3>
        </div>


        <div className='col-md-3'>
        <Link className="link" to="/service">
        <img src={Draft} height={95}/>
        </Link>
        <h3>Structural Design</h3>
        </div>


        <div className='col-md-3'>
        <Link className="link" to="/service">
        <img src={Helmet} height={95}/>
        </Link>
        <h3>Construction</h3>
        </div>

        
        </div>

        
        
        
        
        <Link className="btn" to="/service"><Button>Know More...</Button></Link>
        </div>
      
        </>
    )
};
export default ServiceIcon;
