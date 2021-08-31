
import axios from "axios";
import fetch from 'isomorphic-unfetch'
import Footer from "../components/footer/footer"

import style from "../styles/Home.module.css"
// style={{display:'flex', justifyContent:'center', margin:'20px'}}
const Home = (props) => {
  //  console.log(props.movies)
  return (
    <>
    <section className={style.mainWrapper}>
      <div className={style.family__Image}>
      </div>
      <div className={style.hero__Overlay}>
        <div className={style.contentContainer}>
          <div className={style.grid1}>
          <div className={style.leftPattern}>
         </div>
          </div>
          <div className={style.grid2}>
            contents
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius cum est aspernatur odio reprehenderit rem facere magni in dolores corrupti sunt harum facilis, quisquam quas maiores repellendus magnam officiis.</p>
          </div>
          <div className={style.grid3}>Picture</div>
          <div className={style.grid4}>
            <div className={style.scrollDiv}>
             
            </div>
          </div>
          <div className={style.grid5}>
          <div className={style.buttonContainer} >
          <button className={style.healthLineButton}>NEW HEALTHLINE</button>
          </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    <section className={style.mainWrapper}>
      <div className={style.family__Image}>
      </div>
      <div className={style.hero__Overlay2}>
        <div className={style.contentContainer}>
          <div className={style.grid1}>
          <div className={style.leftPattern}>
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
          <i className={style.arrowDown}></i>
          <button className={style.informationButton}>INFORMATION</button>
          </div>
          </div>
        </div>
      </div>
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

