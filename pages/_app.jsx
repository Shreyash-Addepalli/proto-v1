import "../styles/globals.css";
import "../components/Popup/Popup.css";
import "../components/Instructions/Instructions.css";
import "../components/Landing/Landing.css";
import "../components/Navbars/ActiveMintsNavbars.css";
import "../components/ActiveMintsNavbar/ActiveMintsNavbar.css";
import "../styles/CardsList.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "../components/Drawer/Drawer.css";
//import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
