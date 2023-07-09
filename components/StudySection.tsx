export const StudySection = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:w-1/2">
        <div className="w-full p-8 lg:p-20">
          <div className="flex flex-col w-full h-full p-10 space-y-4 bg-green-500 shadow-md text-neutral-800">
            <h1 className="text-xl">Studies</h1>
            <span>
              I&apos;m studying at Linköping University where I&apos;ve studied
              Computer Science and Engineering focused on AI and machine
              learning. I am currently doing my master thesis at consulting
              company Knowit investigating how SEO can be optimized using AI,
              alongside the researching we&apos;re integrating AI into
              Knowit&apos;s current CMS.{" "}
            </span>
            <span className="font-medium">Notable courses</span>
            <ul className="list-disc">
              <li>
                <a href="https://studieinfo.liu.se/kurs/tddc17">
                  Artificial Intelligence {"(TDDC17)"}
                </a>
              </li>
              <li>
                <a href="https://studieinfo.liu.se/kurs/tdde01">
                  Machine Learning {"(TDDE01)"}
                </a>
              </li>
              <li>
                <a href="https://studieinfo.liu.se/kurs/tdde15">
                  Advanced Machine Learning {"(TDDE15)"}
                </a>
              </li>
              <li>
                <a href="https://studieinfo.liu.se/kurs/tddd41">
                  Data Mining - Clustering and Association Analysis {"(TDDD41)"}
                </a>
              </li>
              <li>
                <a href="https://studieinfo.liu.se/kurs/tbmi26">
                  Neural Networks and Learning Systems {"(TBMI26)"}
                </a>
              </li>
              <li>
                <a href="https://studieinfo.liu.se/kurs/tdde31">
                  Big Data Analytics {"(TDDE31)"}
                </a>
              </li>
              <li>
                <a href="https://studieinfo.liu.se/kurs/tddd27">
                  Advanced Web Programming {"(TDDD27)"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
