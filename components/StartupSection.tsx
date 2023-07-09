import { Planets } from "./Planets";

export const StartupSection = () => {
  return (
    <div className="flex justify-end w-full">
      <div className="w-full lg:w-1/2">
        <div className="w-full p-8 lg:p-20">
          <div className="flex flex-col w-full h-full p-10 space-y-4 shadow-md bg-neutral-50 text-neutral-800">
            <div className="flex flex-col items-center justify-center w-full m-auto bg-white border shadow-inner h-80">
              <div>
                <Planets />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl ">Startup Journey</h1>
              <span>
                In 2023 I founded{" "}
                <a href="https://www.retinello.com" className="font-bold">
                  Retinello
                </a>
                , an AI EdTech startup. Retinello gives users the ability to
                craft flashcards from text, specific subjects, or files
                including PDFs and eBooks, all powered by AI. This feature
                simplifies the initiation of new subjects, making the learning
                process straightforward and enjoyable.
              </span>
              <span>
                However, the real magic lies in how Retinello helps learners
                practice their flashcards. The platform has integrated a spaced
                repetition system along with an interactive learning chat. This
                not only helps learners answer questions and receive feedback,
                but also piques their curiosity to delve deeper into their
                subjects. This interactive approach naturally expands their
                flashcard library, offering a dynamic and engaging learning
                experience.
              </span>
              <span>
                Starting Retinello has been about much more than coding. I've
                learned a whole host of other skills, some expected, others less
                so. There&apos;s the technical side, of course - setting up
                servers, creating databases, developing full-stack web
                applications, and getting to grips with web design. But beyond
                the tech, I've had to step into many different roles. I've
                written content, strategized marketing plans, and learnt about
                leadership and strategic planning. Every new challenge forced me
                to grow, to adapt, and to learn. And while I wouldn&apos;t say
                I&apos;ve mastered any of these, I've certainly become more
                proficient.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
