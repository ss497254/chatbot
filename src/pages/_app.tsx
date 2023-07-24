import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "src/styles/globals.css";
import "src/styles/fonts.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chatbot</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
        <meta name="viewport" content="width=1280, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
