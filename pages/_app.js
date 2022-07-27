import Header from "../components/header/Header";
import "../styles/globals.css";
import "../styles/Home.module.css";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import FunctionsProvider from "../context/FunctionsContext";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
 
 
  return (
    <SessionProvider session={session}>
      <FunctionsProvider>
        <Header />

        <Component {...pageProps} />
      </FunctionsProvider>
    </SessionProvider>
  );
}

export default MyApp;
