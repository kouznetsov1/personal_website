import { LinkedIn, Mail } from "@mui/icons-material";

export const ProfileSection = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:w-1/2">
        <div className="w-full p-8 lg:p-20">
          <div className="flex flex-col w-full h-full p-10 space-y-8 shadow-md bg-neutral-900 text-neutral-200">
            <div className="">
              <img src="/profile-image.jpeg" className="" />
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl">Hello there!</h1>
              <span>
                I&apos;m Daniel, a 26-year-old from Sweden with a keen interest
                in tech. Currently, I&apos;m a Computer Science and Engineering
                student, specializing in AI & Machine Learning. I love digging
                deep into difficult problems and exploring the world of
                full-stack development. My passion for tech goes hand-in-hand
                with my entrepreneurial spirit, and together, they led me to
                found Retinello, an AI EdTech startup that&apos;s
                revolutionizing the learning process.
              </span>
              <span>
                But life isn&apos;t all about tech and startups. Off the screen,
                I&apos;m an enthusiastic foodie who enjoys trying out new
                cuisines and experimenting in the kitchen. My love for reading,
                sports, and music keeps me balanced.
              </span>
              <div className="flex flex-row justify-end w-full pt-10 space-x-2 text-lg">
                <a href="https://www.linkedin.com/in/daniel-kouznetsov-489011127">
                  <LinkedIn style={{ fontSize: "40px" }} />
                </a>
                <a href="mailto:kouznetsov1996@gmail.com">
                  <Mail style={{ fontSize: "42px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
