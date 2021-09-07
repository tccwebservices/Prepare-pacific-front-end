// used for publicRunTimeconfig
import getConfig from 'next/config'
import axios from "axios"
// import fetch from 'isomorphic-unfetch'
import style from "./slug.module.css";
 
export default function Resource(props){
    console.log(props.resources)
    return ( 
        <>
        <div className={style.pageContainer}>
       {/* section- ORANGE */}
    <div className={style.sectionsConatiner}> 
    <section id="section" className={style.sectionWrapper}> {/* HEADING */}
    {/* <div className={style.contentLabel__Background}> Background</div><background></background> */}
    <div className={style.contentContainerA}>
        <div className={style.contentMain__Header}>
        <div className={style.contentMain__HeaderLogo}>
                          <img src="https://via.placeholder.com/150" alt="place holder" />
                            
                    </div>
          <h1>
              {props.resources.MajorTitle}
          </h1>
    </div>
      
    {/* CONTENT SECTION HERE */}
      <div className={style.rowTitle}><b>AUCKLAND WIDE</b></div>
      <div className={style.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
          <div className={style.buttonContainer} >
            <button className={style.whiteButton}>DOWNLOAD</button>
          </div>
      </div>
      <div className={style.rowContent}>COLUMN A</div>
      <div className={style.rowContent}>COLUMN B</div>
      <div className={style.rowContent}>COLUMN C</div>
      
    {/* CONTENT SECTION HERE */}
      <div className={style.rowTitle}><b>WEST AUCKLAND</b></div>
      <div className={style.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
          <div className={style.buttonContainer} >
            <button className={style.whiteButton}>DOWNLOAD</button>
          </div>
      </div>
      <div className={style.rowContent}>COLUMN A</div>
      <div className={style.rowContent}>COLUMN B</div>
      <div className={style.rowContent}>COLUMN C</div>

    {/* CONTENT SECTION HERE */}
      <div className={style.rowTitle}><b>CENTRAL AUCKLAND</b></div>
      <div className={style.rowSubTitle}><b>Food Banks - Updated 26 August 2021</b>
          <div className={style.buttonContainer} >
            <button className={style.whiteButton}>DOWNLOAD</button>
          </div>
      </div>
      <div className={style.rowContent}>COLUMN A</div>
      <div className={style.rowContent}>COLUMN B</div>
      <div className={style.rowContent}>COLUMN C</div>

    </div>
   
   
    
    </section>
    </div>

        </div>
     
       
        </>
     );
}

// publicRuntime config used to present process.env to be on the client isde as well and serverside. 
// set up in next.config.js 

// API CALL to get resource information based on 
const {publicRuntimeConfig} =getConfig()

// maybe replace this page with static props as the content doesnt change very much.
// grabs data accoring to the movie Id 
// to do so its in the context of server side props.
export async function getServerSideProps(context){
    // this will not be on the browser as it serverside props
    // it will be on the serverside so use terminal to view
    // context comes with sever side props
     console.log(context)
    //  const id= context.query.id
    // getting the slug from the context variable.
     const slug= context.query.slug
     console.log(slug)

    // gettiing the dynamic id route from context for each page to be linked up.
    // get movies from id later changed it to below getting movie from slug
    // const response = await axios.get(`${publicRuntimeConfig.API_URL}/movies/${id}`)
    // strapi doesnt know how to filter from slug have to use filters => /movies?slug=${slug}
   
     const response = await axios.get(`${publicRuntimeConfig.API_URL}/Resources?slug=${slug}`)
    //  const response = await fetch(`${publicRuntimeConfig.API_URL}/Resources?slug=${slug}`)
    //  const res = await res.json()
   
  
    return {
      props: {
      //  since we are now making anAPi call based n filtering from the slug() it only has one result in the array 
      // we get an enitire array not juts the Movie object with previous APIcall above
      // we have to get the first object in the array of objects res.data[0]
        resources : response.data[0]
        
      }
  }
}
