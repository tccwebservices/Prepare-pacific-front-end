import Document, {Html, Head, Main, NextScript} from 'next/document';

// used to make sight SEO friendly
export default class CustomDocument extends Document {
    render(){
        return <Html>
            <Head>
            <link rel="stylesheet" href="https://use.typekit.net/pmh8dsl.css"/>
            </Head>
            <body>
                <Main/>
            </body>
           
            <NextScript/>
        </Html>
    }
}
 

 
