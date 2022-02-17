import styles from 'styled-components';
import { Link } from 'react-router-dom';
// import { FaCentercode } from 'react-icons/fa';

export const Button = styles.button`
  background: transparent;
  border:none;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;`
  ;

 export const Wrapper = styles.div`
 text-align: center;
 list-style-type: none;
 background-color: #000;
 color:#fff;
 padding:5% 5% 3% 5%;
 
`;

export const Container = styles.div`
text-align: center;
padding: 5% 5% 5% 5%;
background: ${props => props.primary ? "#FAEDF0" : "#D3DEDC"};
`;






export const Title = styles.div`
text-align: center;
padding: 2% 2%;
font-size: xx-large;
font-weight: bolder;
color: ${props => props.primary? "black" : "white"};
`
;



export const StyledLink = styles(Link)`
color: #fff;
text-decoration:none;
line-height:280%;
font-weight:bold;
`;