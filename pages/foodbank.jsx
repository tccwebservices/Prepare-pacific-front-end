
import axios from "axios";
import fetch from 'isomorphic-unfetch'
import Footer from "../components/footer/footer"
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faChevronDown, faHighlighter } from '@fortawesome/free-solid-svg-icons';

import style from "../styles/Home.module.css"
// style={{display:'flex', justifyContent:'center', margin:'20px'}}
const Home = (props) => {
  //  console.log(props.movies)
  return (
    <>
    {/* section- ORANGE */}
    <section className={style.mainWrapper}>
        <section><h2>CUSTOM HEADER</h2>
            <div><h2>custom logo</h2></div>
            <div><h2>Oversized Text</h2></div>
        </section>
        <section><h2>2 COLUMN TABLE</h2>
            <div><h2>2 Column Table - might be better in sections or modular with buttons</h2></div>
            <div><h2>2 Column Table - might be better in sections or modular with buttons</h2></div>
        </section>
      <Footer/>
    </section>
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

