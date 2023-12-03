import React from "react";
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;

// https://www.youtube.com/watch?v=4mOkFXyxfsU&ab_channel=JavaScriptMastery
// https://github1s.com/adrianhajdin/ecommerce_sanity_stripe
