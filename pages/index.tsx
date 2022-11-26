import type { NextPage } from "next";
import { Profile, Portfolio, Footer } from "@components";
import "@fontsource/roboto";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <div>
        <Head>
          <title>Kouznetsov</title>
          <link rel="icon" href="static/favicon.ico" />
        </Head>
      </div>
      <div>
        <Profile />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
