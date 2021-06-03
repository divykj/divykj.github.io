import "styles/global.css";

import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Router } from "next/router";
import { useEffect } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Nav from "components/Nav";
import { initializeCrisp } from "helpers/crisp";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    // Scroll to top
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });

    // Initialize crisp
    initializeCrisp();
  });

  return (
    <>
      <Head>
        <title>divy jain</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
      <NextNProgress color="rgb(165, 180, 252)" />
    </>
  );
}

export default MyApp;
