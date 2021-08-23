import Link from 'next/link';
import { useState } from 'react';
import Nav from "react-bootstrap/Nav";
import {Navbar} from "react-bootstrap";
import {NavDropdown} from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from './navigation.module.scss';

// import  "../styles/navigation.module.css";
// as = what you would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload.
// if have to rebuild API in strapi just use staic tiltes to get a render

export default function Navigation (props){

  // console.log(props.navigation[0].slug)
// console.log(props.navigation)

  

    return(
    <>
    {/* <h1 className={Styles.title}>Hello</h1> */}
    <nav>
 
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">TCCc-website</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link href="">

      <Nav.Link href="/about">About</Nav.Link>
    </Link>
      {props.navigation.map(item =>(
  <li key={item.id}>
    <Link href={item.slug}>

      <Nav.Link href={item.slug}>
      {item.title}
      </Nav.Link>
    </Link>
    
  </li>

  ))}
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    
       
       
      </nav>

      
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







