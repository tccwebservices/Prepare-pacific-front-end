
import axios from "axios";
import Card from "../components/storycard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import fetch from 'isomorphic-unfetch'
import Styles from '../styles/home.module.copy.css';
import Utils from '../styles/utils.module.css';

// style={{display:'flex', justifyContent:'center', margin:'20px'}}
const Home = (props) => {

  //  console.log(props.movies)
  return (


<section className={Styles.bodyWrapper}>
      <div className={Styles.headerHome}>Header</div>
      <div className={Styles.sidebarLeft}>Sidebar Left</div>
      <div className={Styles.contentHome}>Content</div>
      <div className={Styles.sidebarRight}>Sidebar Right</div>
      <div className={Styles.footerHome}>Footer</div>

</section>


  )
}



export default Home

