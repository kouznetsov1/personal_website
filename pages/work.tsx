import type { NextPage } from "next";
import Head from "next/head";

const Work: NextPage = () => {
  const knowitBadges = ["Python", "GPT-3.5", "AI", "NLP"];
  const configuraBadges = [
    "React",
    "Typescript",
    "Next.js",
    "Tailwind",
    "Babylon.js",
    "C#",
    ".NET",
  ];
  const ericssonBadges = ["Python", "CI/CD", "Confluence"];

  return (
    <div className="w-full">
      <div>
        <Head>
          <title>Work | Daniel Kouznetsov</title>
          <link rel="icon" href="static/favicon.ico" />
        </Head>
      </div>
      <div className="flex flex-col w-full space-y-4">
        <p className="text-2xl">Work</p>
        <div className="z-10 flex w-full p-6 space-x-6 bg-gray-900 rounded-lg">
          <div className="flex flex-col w-full space-y-2 text-xs">
            <p className="text-2xl font-medium">Knowit</p>
            <p className="text-base font-medium">
              Master&apos;s thesis (August 2023 - January 2024)
            </p>
            <p className="">
              Did my masters thesis at Knowit together with a friend. We
              developed an algorithm to enable the use of AI for automating
              content creation. We investigated how well you can iteratively
              refine a prompt to fit some company&apos;s brand voice. The
              project was done in Python and used OpenAI&apos;s GPT-3.5.
            </p>
            <div className="flex flex-wrap pt-2 -ml-1">
              {knowitBadges.map((badge, index) => (
                <span
                  key={index}
                  className="px-2 py-1 m-1 text-xs font-medium rounded-md bg-gray-50 hover:bg-opacity-20 bg-opacity-10"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="z-10 flex w-full p-6 space-x-6 bg-gray-900 rounded-lg">
          <div className="flex flex-col w-full space-y-2 text-xs">
            <p className="text-2xl font-medium">Configura</p>
            <p className="text-base font-medium">Summer Internship 2023</p>
            <p className="">
              Configura makes software for interior designs. To view these
              designs you need to use their software. I worked on a project that
              enabled users to share and view designs in a web browser. The
              projects was done together with two other students.
            </p>
            <div className="flex flex-wrap pt-2 -ml-1">
              {configuraBadges.map((badge, index) => (
                <span
                  key={index}
                  className="px-2 py-1 m-1 text-xs font-medium rounded-md bg-gray-50 hover:bg-opacity-20 bg-opacity-10"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="z-10 flex w-full p-6 space-x-6 bg-gray-900 rounded-lg">
          <div className="flex flex-col w-full space-y-2 text-xs">
            <p className="text-2xl font-medium">Ericsson</p>
            <p className="text-base font-medium">Summer Internship 2022</p>
            <p className="">
              Developed an internal service that automatically generated API
              documentation for other internal services at Ericsson together
              with 2 other students. Made using Python, documentation was
              deployed on confluence using html templates. Lots of DevOps
              involved as well such as setting up CI/CD pipelines.
            </p>
            <div className="flex flex-wrap pt-2">
              {ericssonBadges.map((badge, index) => (
                <span
                  key={index}
                  className="px-2 py-1 m-1 text-xs font-medium rounded-md bg-gray-50 hover:bg-opacity-20 bg-opacity-10"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
