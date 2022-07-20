import Header from "../components/header/Header";
import "../styles/globals.css";
import "../styles/Home.module.css";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import FunctionsProvider from "../context/FunctionsContext";

function MyApp({ Component, pageProps }) {


  return (
    <FunctionsProvider>
        <Header />

        <Component {...pageProps} />

    </FunctionsProvider>
  
  );
}

export default MyApp;
