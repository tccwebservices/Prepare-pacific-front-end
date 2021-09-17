
// import API
import Image from 'next/image'
import axios from "axios";
import fetch from 'isomorphic-unfetch'
// IMoprt fullpahe js scroll
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client


// import Components
import Footer from "../components/footer/footer"
// import DotNav from "../components/dotNavigation/dotNav"

// import the Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your Assets
import { faChevronDown, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import PatternBrown from "../assets/patternBrown.svg"
import PatternOrange from "../assets/patternOrange.svg"
import PatternWhite from "../assets/patternWhite.svg"
import PatternPurple from "../assets/patternPurple.svg"
import TrianglePattern from "../assets/triangles.svg";
import WeavingPattern from "../assets/weaving.svg";
import MountainsPattern from "../assets/mountains.svg";

// import your Images
import Grandparents from "../images/granparents.png";
import Vaccination from "../images/vaccination.png";
import StrongLady from "../images/strongLady.png";
import Family from "../images/family.png";

// import your Stylesheet
import style from "../styles/Home.module.css"

const Home = (props) => {
  return (
    <>
     <ReactFullpage
        // does the dot navigation
          navigation
          // for horizontal navigation and method above.
          // pluginWrapper={pluginWrapper}
          // onLeave={this.onLeave.bind(this)}
          // scrollHorizontally = {true}

          render={comp =>
          <ReactFullpage.Wrapper>
            {/* Section1 ////////// USing className section for ReacFullpage.Wrapper  */}
            <div className="section">
              <div className={`${style.sectionWrapper} ${style.sectionOne}`}>
                {/* Grid Container */}
                <div className={style.gridContainer}>
          
                  {/* Grid Section Column 1 */}
                  <div className={style.gridSections}>
                    <div className={style.flexContainer}>
                      <div className={style.pacificPattern}>
                      {/* <PatternBrown /> */}
                      </div>
                    </div>
                  </div>
                  
                  {/* Grid Section Column 2 */}
                  <div className={style.gridSections}>
                      
                      {/* Grid Section Container */}
                      <div className={style.gridTwoColumnContainer}>
                        <div className={style.gridColumn}>
                          <div className={style.flexContainer}>
                            <div className={style.flexContentContainer}>
                              {/* Content Area Goes here */}
                              <h1>WELCOME TO PREPARE PACIFIC</h1>
                              <h4>THESE ARE SUBHEADINGS</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                                  <br /><br />
                                  Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className={style.gridColumn}>
                        <div className={style.flexContainer}>
                            <div className={style.flexContentContainer}>
                              {/* Content Area Goes here */}
                            
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

          {/* Grid Section Column 3 */}
          <div className={style.gridSections}></div>
        </div>
      </div>
    </div>
    {/* Section Two (.sectionTwo)///////////// */}
    <div className="section">
       
      <div id="sectionTwo" className={`${style.sectionWrapper} ${style.sectionTwo}`}>
        {/* Grid Container */}
        <div className={style.gridContainer}>
          
          {/* Grid Section Column 1 */}
          <div className={style.gridSections}>
            <div className={style.flexContainer}>
              <div className={style.pacificPattern}>
              {/* <PatternBrown /> */}
              </div>
            </div>
          </div>
          
          {/* Grid Section Column 2 */}
          <div className={style.gridSections}>
              
              {/* Grid Section "TWO COLUMN" Container */}
              <div className={style.gridTwoColumnContainer}>
                {/* /// */}
                <div className={style.gridColumn}>
                  <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      {/* Content Area Goes here */}
                      <h1>NEW PACIFIC COVID VACCINATION HEALTHLINE</h1>
                      <h4>THESE ARE SUBHEADINGS</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /// */}
                <div className={style.gridColumn}>
                <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      
                      {/* Content Area Goes here */}
                      <Image src={Grandparents} className={style.contentImages} />
                    
                    </div>
                  </div>
                </div>
              </div>
              
          </div>

          {/* Grid Section Column 3 */}
          <div className={style.gridSections}></div>
        </div>
      </div>
    </div>
     {/* Section Three (.sectionThree) ///////////*/}
    <div className="section">
      <section id="sectionThree" className={`${style.sectionWrapper} ${style.sectionThree}`}>
        {/* Grid Container */}
        <div className={style.gridContainer}>
          
          {/* Grid Section Column 1 */}
          <div className={style.gridSections}>
            <div className={style.flexContainer}>
              <div className={style.pacificPattern}>
              {/* <PatternBrown /> */}
              </div>
            </div>
          </div>
          
          {/* Grid Section Column 2 */}
          <div className={style.gridSections}>
              
              {/* Grid Section "THREE COLUMN" Container */}
              <div className={style.gridThreeColumnContainer}>
                {/* /// */}
                <div className={style.gridColumn}>
                  <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /// */}
                <div className={style.gridColumn}>
                 <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    
                    </div>
                  </div>
                </div>
                {/* /// */}
                <div className={style.gridColumn}>
                  <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>

          {/* Grid Section Column 3 */}
          <div className={style.gridSections}></div>
        </div>
      </section>
    </div>
      {/* Section Four (.sectionFour) /////////////*/}
    <div className="section">
        <div id="sectionFour" className={`${style.sectionWrapper} ${style.sectionFour}`}>
         {/* Grid Container */}
         <div className={style.gridContainer}>
          
          {/* Grid Section Column 1 */}
          <div className={style.gridSections}>
            <div className={style.flexContainer}>
              <div className={style.pacificPattern}>
              {/* <PatternBrown /> */}
              </div>
            </div>
          </div>
          
          {/* Grid Section Column 2 */}
          <div className={style.gridSections}>
              
              {/* Grid Section "TWO COLUMN" Container */}
              <div className={style.gridTwoColumnContainer}>
                {/* /// */}
                <div className={style.gridColumn}>
                  <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /// */}
                <div className={style.gridColumn}>
                <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>

          {/* Grid Section Column 3 */}
          <div className={style.gridSections}></div>
        </div>
      </div>
    </div>
    <div className="section">
 {/* Section Five (.sectionFive) */}
 <div id="sectionFive" className={`${style.sectionWrapper} ${style.sectionFive}`}>
         {/* Grid Container */}
         <div className={style.gridContainer}>
          
          {/* Grid Section Column 1 */}
          <div className={style.gridSections}>
            <div className={style.flexContainer}>
              <div className={style.pacificPattern}>
              {/* <PatternBrown /> */}
              </div>
            </div>
          </div>
          
          {/* Grid Section Column 2 */}
          <div className={style.gridSections}>
              
              {/* Grid Section "THREE COLUMN" Container */}
              <div className={style.gridThreeColumnContainer}>
                {/* /// */}
                <div className={style.gridColumn}>
                  <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /// */}
                <div className={style.gridColumn}>
                 <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    
                    </div>
                  </div>
                </div>
                {/* /// */}
                <div className={style.gridColumn}>
                  <div className={style.flexContainer}>
                    <div className={style.flexContentContainer}>
                      {/* Content Area Goes here */}
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere, nisi vitae porta vehicula, enim ipsum accumsan enim, sed molestie diam sem eget nisi. Etiam tincidunt orci ullamcorper, venenatis odio nec, tincidunt odio. Maecenas porta leo sed lorem ullamcorper, sit amet consectetur nibh lobortis. Morbi id est quis elit tincidunt luctus. Curabitur dignissim ante a eleifend fringilla. Pellentesque varius malesuada tellus at vehicula. Sed in urna nulla. Morbi vel tincidunt augue. Cras congue ac lacus vitae semper. Nam metus arcu, tincidunt iaculis faucibus cursus, euismod nec velit.
                          <br /><br />
                          Donec dapibus dapibus odio ac varius. Proin dignissim tortor quis sagittis aliquet. Ut lacinia odio nec pharetra finibus. Curabitur id lacus vitae nunc mattis iaculis vitae vel erat. Sed et blandit leo, in sollicitudin metus. Cras lobortis turpis augue, sed pulvinar enim interdum vel. Maecenas vel risus eget purus pulvinar rutrum. Sed dolor dui, euismod a vulputate et, rhoncus id massa. Etiam eget lorem sed diam consequat ultrices. Suspendisse sit amet porta diam, id auctor metus. Nullam viverra ut est et consequat. Nunc cursus fermentum gravida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>

          {/* Grid Section Column 3 */}
          <div className={style.gridSections}></div>
        </div>
      </div>
    </div>
    {/* FOOTER SECTION
    **Footer is called here***/}
    {/* <Footer/> */}
   
    </ReactFullpage.Wrapper>
    }
  />
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

