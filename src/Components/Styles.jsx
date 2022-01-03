import styles from 'styled-components';
import { Link } from 'react-router-dom';

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


export const Title = styles.div`
font-size: xx-large;
font-weight: bolder;
color: ${props => props.primary? "black" : "white"};
`;
export const StyledLink = styles(Link)`
color: #fff;
text-decoration:none;
line-height:280%;
font-weight:bold;
`;