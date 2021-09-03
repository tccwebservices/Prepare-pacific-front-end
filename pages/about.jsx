import Link from 'next/link'
import axios from "axios";
// import Header from "../components/header" 


// get static props
function About(props) {
    // tetsing API call
    console.log(props.pages)
    return (
        <div>

            {props.pages.Title}


        </div>
    )
}

export default About

export async function getStaticProps() {
    // using dotenv and getting the url from env file.
    const { API_URL } = process.env

    const response = await axios.get(`${API_URL}/pages`)

    return {
        props: {
            // note if you want the entore aray of data use pages: response.data to get all
            pages: response.data[8]

        }

    }

}