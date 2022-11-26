import type { NextPage } from "next";
import { Profile, Portfolio, Footer } from "@components";
import "@fontsource/roboto";

const Home: NextPage = () => {
  return (
    <div className="">
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
