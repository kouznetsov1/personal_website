import type { NextPage } from "next";
import "@fontsource/roboto";
import Head from "next/head";
import Link from "next/link";
import { skills, courses } from "data/skills";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-full gap-8">
      <Head>
        <title>Daniel Kouznetsov</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full h-full max-w-2xl gap-8">
        <div className="flex flex-col space-y-2">
          <p className="flex flex-row items-center text-2xl text-gray-200">
            I like building stuff.
          </p>
          <p className="text-xs text-opacity-75 text-gray-50">
            I&apos;m very curious about how we can build AI agents to automate
            daily and unneccessary workflows. Currently I am working on building
            a fleet of multi-purpose AI agents and working on my startup in the
            AI/EdTech space.
          </p>
          <p className="text-xs text-opacity-75 text-gray-50">
            I also have a (almost, 99% there with 3 exams left) B.Sc in Computer
            Science and Engineering as well as a M.Sc in AI & Machine Learning.
            During the summers I&apos;ve had internships in tech which you can
            read more about{" "}
            <Link href="/work" className="font-semibold underline">
              here.
            </Link>
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xl text-gray-200">
            From building I&apos;ve learnt...
          </p>
          <p>
            <span className="text-xs text-opacity-75 text-gray-50">
              ...that the best way to learn is by doing. I&apos;ve built a lot
              of projects, some of which you can find{" "}
              <Link href="/projects" className="font-semibold underline">
                here.
              </Link>
            </span>
          </p>
          <p className="text-xs text-opacity-75 text-gray-50">
            Some but not all of the tech I&apos;ve been using for my own
            projects can be seen below.
          </p>
          <div className="flex flex-row flex-wrap pt-6">
            {skills.map((skill, index) => (
              <div className="w-1/2 p-2 lg:w-1/3 2xl:w-1/4">
                <div className="flex flex-col items-center w-full p-6 space-y-2 transition-all duration-150 border rounded-md border-gray-50 hover:border-opacity-20 group bg-gray-50 bg-opacity-10 border-opacity-5">
                  <img
                    src={`images/skills/${skill.iconSrc}icon.svg`}
                    className="p-5 transition-all duration-150 group-hover:p-4"
                    alt={skill.name}
                  />
                  <p className="text-xs text-center transition-all duration-150 text-opacity-60 group-hover:text-opacity-75 text-gray-50">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-xl text-gray-200">...but that&apos;s not all!</p>
          <p className="text-xs text-opacity-75 text-gray-50">
            I also studied engineering where I&apos;ve learnt a ton of calculus,
            physics and several other programming languages such as C/C++, R and
            Java. Here&apos;s some notable courses:
          </p>
          <ul>
            {courses.map((course, index) => (
              <li key={index} className="text-xs text-opacity-75 text-gray-50">
                -{" "}
                <a href={course.link} className="underline">
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
