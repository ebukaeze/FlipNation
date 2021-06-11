import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const social= [
    {
        name: "facebook",
        icon: <AiFillFacebook/>,
        link: "#"
    },
    {
        name: "instagram",
        icon: <AiFillInstagram />,
        link: "#"
    }, 
   {
    name: "Twitter",
    icon: <AiFillTwitterSquare />,
    link: "#"
   }

]

function Footer(){
    return(

    <div className="footer">
     <h3>Footer Section</h3>
     <div className="social">
       <ul className="soc">
     {social.map((soc, index) => (
         <li key={index}><Link to={soc.link}>{soc.icon}
         </Link>
         </li>
     ))}
     </ul>
     </div>
    </div>
    )
}

export default Footer;