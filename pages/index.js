
import axios from "axios";
import fetch from 'isomorphic-unfetch'
import style from "../styles/Home.module.css"
// style={{display:'flex', justifyContent:'center', margin:'20px'}}
const Home = (props) => {

  //  console.log(props.movies)
  return (
    <section className={style.mainWrapper}>
      <div className={style.hero__Image}>
      </div>
      <div className={style.hero__Overlay}>
        <div className={style.contentContainer}>
          <div className={style.grid1}>left side bar HEELOO</div>
          <div className={style.grid2}>Content</div>
          <div className={style.grid3}>Picture</div>
          <div className={style.grid4}>Scroll</div>
          <div className={style.grid5}>Button</div>
        </div>
      </div>
    </section>
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

