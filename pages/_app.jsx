import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/Reset.css";
import "../styles/Base.css";

function MyApp({ Component, pageProps }) {
    // component is the index jsx file, it is the main content of the page. Place the other components around it.
    return (
        <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
