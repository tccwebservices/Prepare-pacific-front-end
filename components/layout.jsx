//  A layout component will save us from havig to do the navigation and footert on every page.
import Navigation from "../components/navigation/navigation"
// import Footer from "./footer/footer"
// import getConfig from 'next/config';
// import fetch from 'isomorphic-unfetch';

const Layout = ({ children, navigation }) => {
//  console.log(navigation)
    return (
        <>
            {/* grabbing the API dats via props from _app.js then sending them into navigation */}
            <Navigation navigation={navigation} />
            {children}
            {/* <Footer /> */}
        </>
    );
}


export default Layout;