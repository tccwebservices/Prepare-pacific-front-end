
require('dotenv').config()


module.exports={
   env: { API_URL: process.env.API_URL
},

publicRuntimeConfig:{
     // Will be available on both server and client
    API_URL: process.env.API_URL,
}
}



// If you already have some config




// http://localhost:1337
// https://backend-thecause.herokuapp.com

// https://strapi-h4sn.onrender.com
// https://ngavaka.nz/tcc-dashboard-login