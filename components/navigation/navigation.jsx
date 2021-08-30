import Link from 'next/link';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import style from './navigation.module.css';

// import  "../styles/navigation.module.css";
// as = what you would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload.
// if have to rebuild API in strapi just use staic tiltes to get a render

export default function Navigation (props){
// used to grab from strapi API
  //  console.log(props.navigation[9].slug)
  console.log(props.navigation[0].title)
console.log(props.navigation)
const [navBar, setNavBar] = useState(false);
// open close function.
const shownavBar = () => setNavBar(!navBar);
// overlay nav open close state and function toggles state
const [navOverlay, setnavOverlay] = useState(false);
const shownavOverlay = () => setnavOverlay(!navOverlay);
//
// const [megaNav, setmegaNav] = useState(false);
// const showmegaNav = () => setmegaNav(!megaNav);

  

  return(
    <>
  {/* <OverlayNav showOverlay={shownavBar}/> */}
  {/* className={ navOverlay ? `${style.overlayActive}` : `${style.overlay} */}
  {/* About overlayNAv //////////////////  */}
  <div className={style.alertStripe}>
 <p className={style.alertTitle}>
   ALERT
 </p>
 
</div>
  <div className={ navOverlay ? `${style.overlayActive}` : `${style.overlay}`}>
  <a  className={style.closebtn} 
  onClick={shownavOverlay}>&times;</a>
  <div  onClick={shownavOverlay} className={style.overlayContent}>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
</div>
{/* ////////////////////////////////////////// */}
<nav className={style.navbarContainer}>
<div className={style.logocontainer}>
      <img src="https://via.placeholder.com/80/#808080
C/O https://placeholder.com//808080 ?Text=Digital.com
C/O https://placeholder.com/" alt="place holder" />
  </div>
 
  <div className={style.navContainer}>

<div className={style.navBarItems}>

<li className={style.links} 
key={props.navigation[0].id}>
   <div className={style.aboutButton} 
onClick={shownavOverlay}>
  {props.navigation[0].title}
</div>
</li>
    <li className={style.links}>
        <Link  
        
        href={props.navigation[1].slug}
        >
        {props.navigation[1].title}
        </Link> 
    </li>
<li className={style.links}>
<Link  

href={props.navigation[2].slug}
>
{props.navigation[2].title}
 </Link> 
</li>

<li className={style.dropbtn}>
  {/* Mega-nav  layout  */}
  <div className="">
      {props.navigation[3].title}
    <i className="fa fa-caret-down"></i>
    <div className="">
    
    <div className={style.dropdownContent}>
      <div className={style.header}>
     
      </div>
      <div className={style.columnContainer}>
      <div className={style.row}>
       <div className={style.column}>
          <h3 className={style.header}>Vaccinations & COVID-19 Info</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div className={style.column}>
          <h3  className={style.header}>Resources</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div className={style.column}>
          <h3 className={style.header}>Talanoa Videos</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div className={style.columnLast}>
          <div className={style.imgContainer}>
        
          </div>
        </div>
      </div>
      </div>
     
    </div>
  </div>
    </div>
  
    

</li>

    
  
    
 

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

     
      {item.title}
    
    </Link>
    
  </li>

  ))}
</div>
</div>
</>
)


}

{/* <Link  
onClick={shownavBar}
className={style.slug}
// href={props.navigation[9].slug}
>
  placeholder
  {/* {props.navigation[9].title} */}
// </Link> */}


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





