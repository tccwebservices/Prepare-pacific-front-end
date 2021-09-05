
import Image from 'next/image'
import axios from "axios";
import fetch from 'isomorphic-unfetch'
import Footer from "../components/footer/footer"
import DotNav from "../components/dotNavigation/dotNav"
// import the library
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faChevronDown, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import PatternBrown from "../assets/patternBrown.svg"
import PatternOrange from "../assets/patternOrange.svg"
import PatternWhite from "../assets/patternWhite.svg"
import PatternPurple from "../assets/patternOrange.svg"
import Grandpa from "../images/granpaChair.png";
import Grandma from "../images/grandmaStanding.png";


import style from "../styles/Home.module.css"
const Home = (props) => {
  //  console.log(props.movies)
  return (
    <>
    {/* section- ORANGE */}
    <div className={style.sectionsConatiner}>
    <section id ="section"className={style.sectionWrapper}>
      <div className={style.family__Image}>
      </div>
      <div className={style.hero__Overlay}>
        <div className={style.contentContainerMain}>
          <div className={style.grid1}>
          <div className={style.leftPattern}>
        <PatternBrown
        className={style.pattern}
        />
         </div>
          </div>
          <div className={style.grid2Main}>
           <h1 className={style.orangeTitle}> 
            WELCOME TO
            PREPARE PACIFIC 
           </h1>
           <p className={style.orangeSub}> 
           Bula Vinaka, Fakaalofa Lahi Atu, Fakatalofa Atu, Halo 
            Olaketa, Kia Orana, Mālō e Lelei, Mālō Nī, Noa’ia, Talofa 
            Lava, Taloha Ni, Tēnā Koutou Katoa.
           </p>
           <p className={style.orangeSub2}>
           This website has been set up to help get information out to our Pacific communities to 
          help us in the battle against coronavirus. Information, updates and advice are available in 
          Pacific languages
           </p>
          </div>
          <div className={style.grid3Main}></div>
          <div className={style.grid4}>
            <div className="">
              <DotNav/>
            </div>
          </div>
          <div className={style.grid5Main}>
          <div className={style.buttonContainer} >
          <FontAwesomeIcon className={style.arrowDown}
          icon={faChevronDown} 
          />
          <button className={style.brownButton}>NEW HEALTHLINE</button>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    {/* section2 - PURPLE */}
    <section id="section" className={style.sectionWrapper}>
      <div className={style.family__Image}>
      </div>
      <div className={style.hero__Overlay2}>
        <div className={style.contentContainer}>
          <div className={style.grid1}>
          <div>
            <PatternOrange
            className={style.pattern}
            />
         </div>
          </div>
          <div className={style.grid2}>
          <div className={style.purpleContentContainer}>
            <h1 className={style.purpleTitle}>NEW PACIFIC COVID VACCINATION 
              <p className={style.orangePartTitle}>HEALTHLINE</p>
            </h1>
            <button className={style.purpleSectionButton}>
              0800 21 12 21
            </button>
            <p className={style.subParagraph}>Pacific peoples living in Auckland aged 12 and over are now 
            ible along with their household bubble to get their free 
            COVID-19 vaccination</p>
            <p  className={style.subParagraph2}>
            To make it easier, we’ve set up a new number for Pacific peoples to get 
            help with your booking. It’s simple and free, just call 0800 21 12 21, 
            8am - 8pm, 7 days a week, to talk to a Pacific member of the Covid 
            Vaccination Team to make a booking
            </p>
            <button className={style.orangeButton}>
             VIEW RESOURCES
            </button>
         </div>
          
          </div>
          <div className={style.grid3}>
            <div className={style.grandmaGradpaBox}>

            <div className={style.grandpaBox}>
              <Image  className={style.grandpa}
              src={Grandpa} 
              alt="me" 
              width={500}
              height={500}
              layout="fixed"
              quality={65}
              />
            </div>
            <div className={style.grandmaBox}>
            <Image className={style.grandma} 
              src={Grandma} 
              alt="me" 
              width={500}
              height={500}
              layout="fixed"
              quality={65}
            />
            </div>
            </div>
           
          </div>
          <div className={style.grid4}>
            <div>
             
            </div>
          </div>
          <div className={style.grid5}>
          <div className={style.buttonContainer} >
          
          <FontAwesomeIcon className={style.arrowDown2}
          icon={faChevronDown} 
          />
          <button className={style.whiteButton}>INFORMATION</button>
          </div>
          </div>
        </div>
      </div>
    </section>
    {/* section3 -WHITE */}
    <section id="section" className={style.sectionWrapper}>
      <div className={style.family__Image3}>
      </div>
      <div className={style.hero__Overlay3}>
        <div className={style.contentContainerA}>
          <div className={style.grid1A}>
            <div className={}></div>

          <div>
          <PatternPurple className={style.pattern}/>
         </div>
          </div>
          <div className={style.grid2A}>
            content
           Grid 1
          </div>
          <div className={style.grid3A}>grid2</div>
          <div className={style.grid4A}>grid3</div>
          <div className={style.grid5A}>
            <div className={style.scrollDiv}>
             
            </div>
          </div>
          <div className={style.grid6A}>
          <div className={style.buttonContainer} >
          
          <FontAwesomeIcon className={style.arrowDown}
          icon={faChevronDown} 
          />
          <button className={style.brownButton}>NEW HEALTHLINE</button>
          </div>
          </div>
        </div>
      </div>
    </section>
     {/* section4- BLUE */}
    <section id="section" className={style.sectionWrapper}>
      <div className={style.family__Image}>
      </div>
      <div className={style.hero__Overlay4}>
        <div className={style.contentContainer}>
          <div className={style.grid1}>
          <div>
          <PatternWhite className={style.pattern}/>
         </div>
          </div>
          <div className={style.grid2}>
            content
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis.</p>
          </div>
          <div className={style.grid3}>Picture</div>
          <div className={style.grid4}>
            <div className={style.scrollDiv}>
             
            </div>
          </div>
          <div className={style.grid5}>
          <div className={style.buttonContainer} >
          
          <FontAwesomeIcon className={style.arrowDown2}
          icon={faChevronDown} 
          />
          <button className={style.whiteButton}>GET IN TOUCH</button>
          </div>
          </div>
        </div>
      </div>
     </section>
     {/* section5 -GREY*/}
     <section id="section" className={style.sectionWrapper}>
       <div className={style.sectionWrapper}>
       </div>
      <div className={style.testingStation__Image}>
      </div>
      <div className={style.hero__Overlay5}>
        <div className={style.contentContainerA}>
          <div className={style.grid1A}>
          {/* <div className={style.leftPatternA}>
         </div> */}
          </div>
          <div className={style.grid2A}>
            contentsssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
           Grid 1
          </div>
          <div className={style.grid3A}>grid2</div>
          <div className={style.grid4A}>grid3</div>
          <div className={style.grid5A}>
            <div className={style.scrollDiv}>
             
            </div>
          </div>
          <div className={style.grid6A}>
          <div className={style.buttonContainer} >
          
          <FontAwesomeIcon className={style.arrowDown}
          icon={faChevronDown} 
          />
          <button className={style.brownButton}>NEW HEALTHLINE</button>
          </div>
          </div>
        </div>
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

