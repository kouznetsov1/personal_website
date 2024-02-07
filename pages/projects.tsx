import { MelloriPlanets, Planets } from "components/misc/Planets";
import type { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage = () => {
  return (
    <div className="w-full">
      <div>
        <Head>
          <title>Projects | Daniel Kouznetsov</title>
          <link rel="icon" href="static/favicon.ico" />
        </Head>
      </div>
      <div className="flex flex-col w-full space-y-6">
        <p className="text-2xl">Projects</p>
        <div className="z-10 flex flex-col w-full p-6 space-y-4 bg-gray-900 rounded-lg lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="z-20 flex flex-col items-center justify-center w-full h-56 bg-blue-100 border rounded-md shadow-inner lg:h-40 lg:w-64 border-gray-50 border-opacity-10 bg-opacity-5">
            <Planets />
          </div>
          <div className="flex flex-col w-full space-y-4 text-xs">
            <p className="-mb-2 text-xl font-medium">Retinello</p>
            <p>
              A learning platform aiming to make it easier for students to study
              more efficiently with spaced repetition. Users can create
              flashcards using AI from subject, texts or PDF documents. Then
              practice on these using spaced repetition or interactive learning.
              Interactive learning is basically ChatGPT, the chat asks you the
              questions that you need to practice on. There&apos;s also RAG
              implemented giving users the feature to chat with their PDF
              documents.
            </p>
            <div className="flex flex-col space-y-2">
              <p>Tech and services used:</p>
              <ul>
                <li>&#8226; Typescript</li>
                <li>&#8226; Next.js</li>
                <li>&#8226; React</li>
                <li>&#8226; Tailwind</li>
                <li>&#8226; Jotai</li>
                <li>&#8226; Vercel</li>
                <li>&#8226; DigitalOcean</li>
                <li>&#8226; Node</li>
                <li>&#8226; Express</li>
                <li>&#8226; OpenAI</li>
                <li>&#8226; PineconeDB</li>
                <li>&#8226; MongoDB</li>
              </ul>
            </div>
            <p>
              Check it out{" "}
              <a
                href="https://retinello.com"
                className="font-medium underline"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
        <div className="z-10 flex flex-col w-full p-6 space-y-6 bg-gray-900 rounded-lg lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="z-20 flex flex-col items-center justify-center w-full h-56 bg-blue-100 border rounded-md shadow-inner lg:w-64 lg:h-40 border-opacity-5 border-gray-50 bg-opacity-5">
            <MelloriPlanets />
          </div>
          <div className="flex flex-col w-full space-y-4 text-xs">
            <p className="-mb-2 text-xl font-medium">Mellori</p>
            <p>
              An abandoned project but me and my friend built an MVP. A SaaS
              aimed at businesses to instantly get a chat support up and running
              based on their data. The plan was for you to also be able to
              connect it with your internal communcation channels such as Slack,
              Teams, etc.
            </p>
            <div className="flex flex-col space-y-2">
              <p>
                Tech and services used is similar to Retinello but we switched
                some tools:
              </p>
              <ul>
                <li>&#8226; Node -{">"} Bun</li>
                <li>&#8226; Express -{">"} Elysia</li>
                <li>&#8226; PineconeDB -{">"} Atlas Vector Search</li>
              </ul>
            </div>
            <p>
              Check it out{" "}
              <a
                href="https://mellori.ai"
                className="font-medium underline"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <p className="text-xs text-opacity-50 text-gray-50">
              (Note: the project is abandoned and the backend is not online)
            </p>
          </div>
        </div>
        <div className="z-10 flex flex-col w-full p-6 space-y-6 bg-gray-900 rounded-lg lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="z-20 flex flex-col items-center justify-center w-full h-56 bg-blue-100 border border-purple-500 border-opacity-50 rounded-md shadow-inner lg:w-64 lg:h-40 bg-opacity-5">
            <img src="/images/labs-logo.svg" className="size-20 blur-sm" />
          </div>
          <div className="flex flex-col w-full space-y-4 text-xs">
            <p className="-mb-2 text-xl font-medium">Retinello Laboratories</p>
            <p>
              We also built Laboratories to be able to experiment with new
              products and have everything under it&apos;s own umbrella,
              products, consulting etc. We we&apos;re two people at first but
              now it&apos;s just me.
            </p>
            <p>This is just a frontend.</p>

            <p>
              Check it out{" "}
              <a
                href="https://retinellolabs.com"
                className="font-medium underline"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
