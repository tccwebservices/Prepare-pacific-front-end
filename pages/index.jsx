
import axios from "axios";
import Card from "../components/storycard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import fetch from 'isomorphic-unfetch'
import Styles from '../styles/home.module.css';

// style={{display:'flex', justifyContent:'center', margin:'20px'}}
const Home = (props) => {

  //  console.log(props.movies)
  return (
    <>
    <section>
    <div className={Styles.headerGridContainer}>
        HEADER
      <div className={Styles.heroImage}>
     {/* <img src="https://via.placeholder.com/1000X500/000000/FFFFFF
C/O https://placeholder.com/#How_To_Set_Background_Text_Color
" alt="" /> */}
    </div>
    </div>
    </section>
    <section className={Styles.aboutContainer}>
          <div className={Styles.aboutTitle}>
              ABOUT
          </div>
    </section>
    <section className={Styles.foodbankContainer}>
          <div className={Styles.foodbankTitle}>
              FOODBANK
          </div>
    </section>
    <section className={Styles.resourcesContainer}>
          <div className={Styles.resourcesTitle}>
              RESOURCES
          </div>
    </section>
    
    {/* <section className={Styles.contactSection}>
      <div className={Styles.contactContainer}>
      <h1 className={Styles.contactTitle}>
         CONTACT
    </h1>
     <div className={Styles.contactGridContainer}>
        <div className={Styles.grid}>200px x 200px</div>
        <div className={Styles.grid}>200px x 200px</div>
        <div className={Styles.grid}>200px x 200px</div>
        <div className={Styles.grid}>200px x 200px</div>
        <div className={Styles.grid}>200px x 200px</div>
        <div className={Styles.grid}>200px x 200px</div>
   </div>
      </div>
   
    </section> */}
    </>



//     <Container fluid>
//       <Row style={{justifyContent:'center'}}>
//       {props.movies.map(movie=>(
//         <div style={{margin:'2rem'}} >
//             <Card
//             key={movie.id}
//             movie={movie}
//             />
//         </div>
//       ))}
//       </Row>
    
//  </Container>
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

