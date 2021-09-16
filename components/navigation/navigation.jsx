
// import API
import Link from 'next/link';
import { useState } from 'react';

// import CSS Stylesheet
import style from './Navigation.module.css';

// import Assets
import Logo from "../../assets/preparePacificLogo.svg";

// import Component
// import AboutModal from "../About/aboutModal";

// import  "../styles/navigation.module.css";
// as = what you would liek your link to look like
// href is the atual path to your template
// the other normal Link pages will do a static full page reload.
// if have to rebuild API in strapi just use staic tiltes to get a render

export default function Navigation(props) {
    // used to grab from strapi API
    //  console.log(props.navigation[9].slug)
    console.log(props.navigation[0].slug)
    console.log(props.navigation)
    const [navBar, setNavBar] = useState(false);
    // open close function.
    const shownavBar = () => setNavBar(!navBar);
    // overlay nav open close state and function toggles state
    const [navOverlay, setnavOverlay] = useState(false);
    const shownavOverlay = () => setnavOverlay(!navOverlay);
    //
    const [megaNav, setmegaNav] = useState(false);
    const showmegaNav = () => setmegaNav(!megaNav);


    return (
        <>
            {/* <OverlayNav showOverlay={shownavBar}/> */}
            {/* className={ navOverlay ? `${style.overlayActive}` : `${style.overlay} */}
            {/* About overlayNAv //////////////////  */}
           
            {/* <AboutModal /> */}
            {/* <div className={navOverlay ? `${style.overlayActive}` : `${style.overlay}`}>
                <a className={style.closebtn} onClick={shownavOverlay}>&times;</a>
                <div onClick={shownavOverlay} className={style.overlayContent}>
                
                </div>
                </div> */}




            {/* HEADER SECTION */}
            {/* Alert & Navigation goes here */}
            {/* ////////////////////////////////////////// */}

            <header className={style.headerSection}>
            {/* Alert Container */}
                <div className={style.alertStripe}>
                    <div className={style.alertTitle}>
                        <div className={style.firstPart}> We are now in &nbsp; </div>
                        <div className={style.alertLevel}>LEVEL 4. &nbsp; </div> 
                        <div className={style.clickPart}>Click here for more details</div>
                    </div> 
                </div>

            {/* Nav Container */}
                <nav className={style.navbarContainer}>
                    {/* Logo Container */}
                    <Link href="/">
                        <Logo className ={style.prepareLogo}/>
                    </Link>
            <div className={style.logoContainer}>
                </div>
                <div className={style.navContainer}>
                    <div className={style.navBarItems}>
                   
                        <li className={style.links}
                            key={props.navigation[3].id}>
                            <div className={style.aboutButton}
                                onClick={shownavOverlay}>
                                {props.navigation[3].title}
                            </div>
                        </li>
                        <li className={style.links}>
                            <Link

                                href={props.navigation[4].slug}
                            >
                                {props.navigation[4].title}
                            </Link>
                        </li>
                        <li className={style.links}>
                            <Link

                                href={props.navigation[5].slug}
                            >
                                {props.navigation[5].title}
                            </Link>
                        </li>

                        <li className={style.dropbtn}>
                            {/* Mega-nav  layout  */}
                            <div className="">
                                {props.navigation[1].title}
                                <i className="fa fa-caret-down"></i>
                                <div className="">

                                    <div className={style.dropdownContent}>
                                        <div className={style.header}>

                                        </div>
                                        <div className={style.columnContainer}>
                                            <div className={style.row}>
                                                <div className={style.column}>
                                                    <h3 className={style.header}>Vaccinations & COVID-19 Info</h3>
                                                    {/*  */}
                                                    <Link href="/resources/[slug]" as={`/resources${props.navigation[2].slug}`} >
                                                        {props.navigation[2].title} 
                                                    </Link>
                                                    <Link href="/resources/[slug]" as={`/resources${props.navigation[0].slug}`} >
                                                        {props.navigation[0].title} 
                                                    </Link>
                                                    <a href="#">Link 3</a>
                                                </div>
                                                <div className={style.column}>
                                                    <h3 className={style.header}>Resources</h3>
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
                                                        img
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
            </header>

            {/* Responsive NavBar */}
           
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






