import Link from 'next/link'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios";
// import Header from "../components/header" 


// get static props
function OneLove(props) {
   console.log(props.pages.Title)
  return (
      <div>
       <h2>{props.pages.Title}</h2>
     
      
      </div>
  )
}

export default OneLove;

export async function getStaticProps(){
  // using dotenv and getting the url from env file.
  const {API_URL} = process.env

  const response = await axios.get(`${API_URL}/pages`)
  
  return {
    props: {
      // pulling a specific array from API/Pages.
      // first array in pages ->this case it being onelove.
        pages: response.data[0]
    }
}

}

// <Container fluid="md">
// <h2>{props.pages.Title}</h2>
//       <Row>
//           <Col style={{justifyContent:'center'}}>
          {/* <p>{props.pages.description}</p> */}
          {/* </Col>
      </Row>
  </Container> */}


