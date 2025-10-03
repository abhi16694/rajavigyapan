import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const contactRef = useRef(null);
  const navRefs = { contactRef };

  return (
    <>
      <Head>
        <title>Raja Vigyapan Agency</title>
        <meta name="description" content="Raja Vigyapan Agency" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar navRefs={navRefs} />
      <Component {...pageProps} navRefs={navRefs} />
      <Footer />
    </>
  );
}