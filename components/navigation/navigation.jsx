import Link from 'next/link';
import { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import {Navbar} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import style from './navigation.module.css';

// import  "../styles/navigation.module.css";
// as = what you would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload.
// if have to rebuild API in strapi just use staic tiltes to get a render

export default function Navigation (props){

  // console.log(props.navigation[0].slug)
// console.log(props.navigation)
const [navBar, setNavBar] = useState(false);


// open close function.
const shownavBar = () => setNavBar(!navBar);
  

    return(
    <>
    {/* <h1 className={Styles.title}>Hello</h1> */}
<nav className={style.navbarContainer}>
<div className={style.logocontainer}>
      <img src="https://via.placeholder.com/80/#808080
C/O https://placeholder.com//808080 ?Text=Digital.com
C/O https://placeholder.com/" alt="place holder" />
  </div>
  <div className={style.navContainer}>
  <div className={style.navBarItems}>
{props.navigation.map(item =>(
  <li className={style.links} key={item.id}>
    <Link href={item.slug}>

      <Nav.Link href={item.slug}>
      {item.title}
      </Nav.Link>
    </Link>
    
  </li>

  ))}

</div>
{/* resposive nav button in nav */}
<button className={style.icon} 
onClick={shownavBar}>
  <i className="fa fa-bars"></i>
  Button
</button>


  </div> 
</nav>
<div className={ navBar ? `${style.responisveNavActive}` : `${style.responsiveNav}`} >
<div className={style.responsiveNavContainer}>
{props.navigation.map(item =>(
  <li className={style.responsiveLinks} key={item.id}>
    <Link href={item.slug}>

      <Nav.Link href={item.slug}>
      {item.title}
      </Nav.Link>
    </Link>
    
  </li>

  ))}
</div>
</div>
</>
)


}

// {props.navigation.map(item=>(
//   <li key={props.navigation.id}>
//     <Link href={item.slug}>
      
//     <Nav.Link href={item.slug} className="">
//       {item.title}
//       <svg className=" w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//       </Nav.Link>
//     </Link>
//   </li>
//   ))}

// {props.navigation.map(item =>(
//   <li key={item.id}>
//     <Link href={item.slug}>

//       <Nav.Link href={item.slug}>
//       {item.title}
//       </Nav.Link>
//     </Link>
    
//   </li>

//   ))}






