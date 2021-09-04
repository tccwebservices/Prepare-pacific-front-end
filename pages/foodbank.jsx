
import axios from "axios";
import fetch from 'isomorphic-unfetch'
import Footer from "../components/footer/footer"
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faChevronDown, faHighlighter } from '@fortawesome/free-solid-svg-icons';

import style from "../styles/Home.module.css"
import fstyle from "../styles/Foodbank.module.css"
// style={{display:'flex', justifyContent:'center', margin:'20px'}}
const Home = (props) => {
  //  console.log(props.movies)
  return (
    <>
    {/* section- ORANGE */}
    <div className={fstyle.sectionsConatiner}> 
    <section id="section" className={fstyle.sectionWrapper}> {/* HEADING */}
    {/* <div className={fstyle.contentLabel__Background}> Background</div><background></background> */}
    <div className={fstyle.contentContainerA}>
        <div className={fstyle.contentMain__Header}>
        <div className={fstyle.contentMain__HeaderLogo}>
                          <img src="https://via.placeholder.com/150" alt="place holder" />
                            
                    </div>
          <h1>LOCATIONS OF FOOD BANKS</h1>
    </div>
      
    {/* CONTENT SECTION HERE */}
      <div className={fstyle.rowTitle}><b>AUCKLAND WIDE</b></div>
      <div className={fstyle.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
          <div className={fstyle.buttonContainer} >
            <button className={fstyle.whiteButton}>DOWNLOAD</button>
          </div>
      </div>
      <div className={fstyle.rowContent}>COLUMN A</div>
      <div className={fstyle.rowContent}>COLUMN B</div>
      <div className={fstyle.rowContent}>COLUMN C</div>
      
    {/* CONTENT SECTION HERE */}
      <div className={fstyle.rowTitle}><b>WEST AUCKLAND</b></div>
      <div className={fstyle.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
          <div className={fstyle.buttonContainer} >
            <button className={fstyle.whiteButton}>DOWNLOAD</button>
          </div>
      </div>
      <div className={fstyle.rowContent}>COLUMN A</div>
      <div className={fstyle.rowContent}>COLUMN B</div>
      <div className={fstyle.rowContent}>COLUMN C</div>

    {/* CONTENT SECTION HERE */}
      <div className={fstyle.rowTitle}><b>CENTRAL AUCKLAND</b></div>
      <div className={fstyle.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
          <div className={fstyle.buttonContainer} >
            <button className={fstyle.whiteButton}>DOWNLOAD</button>
          </div>
      </div>
      <div className={fstyle.rowContent}>COLUMN A</div>
      <div className={fstyle.rowContent}>COLUMN B</div>
      <div className={fstyle.rowContent}>COLUMN C</div>

    </div>
   
   
    
    </section>
    </div>






    </>
  )


}

// export async function getStaticProps(){
//   // using dotenv and getting the url from env file.
//   const {API_URL} = process.env

//   // const res = await fetch(`${API_URL}/movies`)
//   // const response = await res.json()
//   const response = await axios.get(`${API_URL}/movies`)



//   return {
//     props: {
//         movies: response.data
//     }
// }

// }



export default Home

