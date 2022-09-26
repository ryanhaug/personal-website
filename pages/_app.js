import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ryan Haug</title>
        <meta name="description" content="Personal website" />
        <link rel="icon" href="/ryan_logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
