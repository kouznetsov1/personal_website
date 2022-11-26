import type { NextPage } from "next";
import { Profile, Portfolio } from "@components";
import "@fontsource/roboto";

const Home: NextPage = () => {
  return (
    <div className="">
      <div>
        <Profile />
        <Portfolio />
      </div>
    </div>
  );
};

export default Home;
