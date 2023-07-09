import type { NextPage } from "next";
import "@fontsource/roboto";
import Head from "next/head";
import { ProfileSection } from "components/Section";
import { StartupSection } from "components/StartupSection";
import { StudySection } from "components/StudySection";
import { WorkSection } from "components/WorkSection";
import { FadeInSection } from "components/FadeInSection";

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
        <ProfileSection />
        <FadeInSection>
          <StartupSection />
        </FadeInSection>
        <FadeInSection>
          <StudySection />
        </FadeInSection>
        <FadeInSection>
          <WorkSection />
        </FadeInSection>
      </div>
    </div>
  );
};

export default Home;
