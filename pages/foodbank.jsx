
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
const Home = (props) => {
  //  console.log(props.movies)
  return (
    <>
    {/* section- ORANGE */}
    <div className={fstyle.sectionsConatiner}> 
    <section id="section" className={fstyle.sectionWrapper}> 
    {/*////////////////// HEADING */}
    {/* <div className={fstyle.contentLabel__Background}> Background</div><background></background> */}
    <div className={fstyle.contentContainerA}>
        <div className={fstyle.contentMain__Header}>
        <div className={fstyle.contentMain__HeaderLogo}>
                          <img src="https://via.placeholder.com/150" alt="place holder" />   
                    </div>
          <h1>LOCATIONS OF FOOD BANKS</h1>
    </div>
    {/* CONTENT SECTION HERE */}
    <section className={fstyle.rowsWrapper}>
      <div className={fstyle.rowTitle}><b>AUCKLAND WIDE</b></div>
      <div className={fstyle.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
      </div>
      <div className={fstyle.buttonContainer} >
            <button className={fstyle.whiteButton}>DOWNLOAD</button>
          </div>
      <section className={fstyle.rowContent}>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Salvation Army</div>
            < div className={fstyle.columnMid}>0800 53 00</div>
            <div className={fstyle.columnRight}></div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Presbyterian Support Northern</div>
            < div className={fstyle.columnMid}>09 309 2054</div>
            <div className={fstyle.columnRight}>Collections between 11am - 12pm, Tuesday to Friday from 8
            Madeira Lane, Grafton. No walk-ins. For Central Auckland only.
            </div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Foodbank NZ</div>
            < div className={fstyle.columnMid}>info@foodbank.co.nz</div>
            <div className={fstyle.columnRight}>www.foodbank.org.nz</div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Auckland City Mission</div>
            < div className={fstyle.columnMid}>0800 223 663</div>
            <div className={fstyle.columnRight}>Monday - Friday, reception open 8.30am - 5.00pm. Call 0800
            223 663 and your needs will be assessed. You will then be given the address to pick up your request.</div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}></div>
            < div className={fstyle.columnMid}></div>
            <div className={fstyle.columnRight}></div>
        </div>
      </section>
    </section>
    <section className={fstyle.rowsWrapper}>
      <div className={fstyle.rowTitle}><b>WEST AUCKLAND</b></div>
      <div className={fstyle.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
      </div>
      <div className={fstyle.buttonContainer} >
            <button className={fstyle.whiteButton}>DOWNLOAD</button>
          </div>
      <section className={fstyle.rowContent}>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Salvation Army</div>
            < div className={fstyle.columnMid}>0800 53 00</div>
            <div className={fstyle.columnRight}></div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Presbyterian Support Northern</div>
            < div className={fstyle.columnMid}>09 309 2054</div>
            <div className={fstyle.columnRight}>Collections between 11am - 12pm, Tuesday to Friday from 8
            Madeira Lane, Grafton. No walk-ins. For Central Auckland only.
            </div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Foodbank NZ</div>
            < div className={fstyle.columnMid}>info@foodbank.co.nz</div>
            <div className={fstyle.columnRight}>www.foodbank.org.nz</div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Auckland City Mission</div>
            < div className={fstyle.columnMid}>0800 223 663</div>
            <div className={fstyle.columnRight}>Monday - Friday, reception open 8.30am - 5.00pm. Call 0800
            223 663 and your needs will be assessed. You will then be given the address to pick up your request.</div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}></div>
            < div className={fstyle.columnMid}></div>
            <div className={fstyle.columnRight}></div>
        </div>
      </section>
    </section>

    <section className={fstyle.rowsWrapper}>
      <div className={fstyle.rowTitle}><b>CENTRAL AUCKLAND</b></div>
      <div className={fstyle.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
      </div>
      <div className={fstyle.buttonContainer} >
            <button className={fstyle.whiteButton}>DOWNLOAD</button>
          </div>
      <section className={fstyle.rowContent}>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Salvation Army</div>
            < div className={fstyle.columnMid}>0800 53 00</div>
            <div className={fstyle.columnRight}></div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Presbyterian Support Northern</div>
            < div className={fstyle.columnMid}>09 309 2054</div>
            <div className={fstyle.columnRight}>Collections between 11am - 12pm, Tuesday to Friday from 8
            Madeira Lane, Grafton. No walk-ins. For Central Auckland only.
            </div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Foodbank NZ</div>
            < div className={fstyle.columnMid}>info@foodbank.co.nz</div>
            <div className={fstyle.columnRight}>www.foodbank.org.nz</div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}>Auckland City Mission</div>
            < div className={fstyle.columnMid}>0800 223 663</div>
            <div className={fstyle.columnRight}>Monday - Friday, reception open 8.30am - 5.00pm. Call 0800
            223 663 and your needs will be assessed. You will then be given the address to pick up your request.</div>
        </div>
        <div className={fstyle.columnWrapper}>
            <div className={fstyle.columnLeft}></div>
            < div className={fstyle.columnMid}></div>
            <div className={fstyle.columnRight}></div>
        </div>
      </section>
    </section>

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

