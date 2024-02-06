import type { NextPage } from "next";
import "@fontsource/roboto";
import Head from "next/head";
import Link from "next/link";
import { Briefcase, Laptop, Newspaper } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/Avatar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-full h-full gap-8">
      <Head>
        <title>Daniel Kouznetsov</title>
        <link rel="icon" href="static/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full h-full max-w-2xl gap-2">
        <p className="flex flex-row items-center gap-4 text-lg text-gray-200">
          I&apos;m Daniel and I like building stuff.
          <Avatar>
            <AvatarImage
              src="https://media.licdn.com/dms/image/D4D03AQGB3EnIzprO6A/profile-displayphoto-shrink_800_800/0/1684498437871?e=1712793600&v=beta&t=iVRcCPM5HrLWa0wT4pKxX_S6dm_cKiLKKJGzJNcZhLk"
              alt="Daniel Kouznetsov"
            />
            <AvatarFallback>DK</AvatarFallback>
          </Avatar>
        </p>
        <p className="text-xs text-opacity-75 text-gray-50">
          I&apos;m very curious about how we can build AI agents to automate
          daily, unneccessary workflows. Currently I am working on building a
          fleet of multi-purpose AI agents and working on my startup in the
          AI/EdTech space, you can read more about my startup{" "}
          <Link href="/projects" className="font-semibold underline">
            here.
          </Link>
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
      <div className="flex flex-col gap-4">
        <Link
          href="/projects"
          className="flex flex-row w-full gap-6 p-8 transition-all duration-75 border border-gray-200 border-opacity-25 rounded-lg h-fit hover:bg-gray-800 hover:bg-opacity-25"
        >
          <div className="bg-gray-200 rounded-2xl xl:w-1/4 max-w-36 bg-opacity-10 aspect-square">
            <Laptop className="w-full h-full p-6 opacity-80 text-gray-50" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">Projects</p>
            <p className="max-w-lg text-xs text-opacity-60 text-gray-50">
              During my studies I had several side projects. Currently I am
              working on a few things that I am going to showcase here. I am
              also working on my startup Retinello.
            </p>
          </div>
        </Link>
        <Link
          href="/work"
          className="flex flex-row w-full gap-6 p-8 transition-all duration-75 border border-gray-200 border-opacity-25 rounded-lg h-fit hover:bg-gray-800 hover:bg-opacity-25"
        >
          <div className="bg-gray-200 rounded-2xl xl:w-1/4 max-w-36 bg-opacity-10 aspect-square">
            <Briefcase className="w-full h-full p-6 opacity-80 text-gray-50" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">Work</p>
            <p className="max-w-lg text-xs text-opacity-60 text-gray-50">
              I studied Computer Science and Engineering and then did a M.Sc in
              AI & Machine Learning. The last two summers I also had internships
              in tech at Ericsson and Configura.
            </p>
          </div>
        </Link>
        <Link
          href="/writing"
          className="flex flex-row w-full gap-6 p-8 transition-all duration-75 border border-gray-200 border-opacity-25 rounded-lg h-fit hover:bg-gray-800 hover:bg-opacity-25"
        >
          <div className="bg-gray-200 rounded-2xl xl:w-1/4 max-w-36 bg-opacity-10 aspect-square">
            <Newspaper className="w-full h-full p-6 opacity-80 text-gray-50" />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl font-bold">Writing</p>
            <p className="max-w-lg text-xs text-opacity-60 text-gray-50">
              I write alot but mostly for myself. Sometimes I learn a thing or
              two or have something longer to say and I might write it down
              here.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
