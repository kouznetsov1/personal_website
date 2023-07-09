export const WorkSection = () => {
  return (
    <div className="flex justify-end w-full">
      <div className="w-full lg:w-1/2">
        <div className="w-full p-8 lg:p-20">
          <div className="flex flex-col w-full h-full p-10 space-y-4 bg-indigo-500 shadow-md text-neutral-50">
            <h1 className="text-xl">Work</h1>
            <span>
              For two summers now I&apos;ve had internships. One at Ericsson and
              one at Configura. Prior to studying I had experience working in
              sales, call centers and factories.
            </span>
            <div className="border-t-2 border-neutral-50"></div>
            <h3 className="text-lg ">Configura {"(Internship 2023)"}</h3>
            <span>
              Together with two other students we built a new export feature
              from Configura&apos;s interior design software giving customers
              easy access via the web to showcase their designs. Built with
              Typescript, React, Tailwind and Babylon, backend written in C#.
            </span>
            <div className="border-t-2 border-neutral-50"></div>
            <h3 className="text-lg ">Ericsson {"(Internship 2022)"}</h3>
            <span>
              Developed an internal service that automatically generated API
              documentation for other internal services at Ericsson together
              with 2 other students. Made using Python, documentation was
              deployed on confluence using html templates. Lots of DevOps
              involved as well such as setting up CI/CD pipelines.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
