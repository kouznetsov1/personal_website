import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { aboutMe } from "./profileData";
import { ProfileImage } from "./ProfileImage";

export const Profile = () => {
  const linkedinURL =
    "https://www.linkedin.com/in/daniel-kouznetsov-489011127/";
  const githubURL = "https://www.github.com/kouznetsov1";

  return (
    <div className="min-h-screen bg-gradient-to-tr animate-gradient from-neutral-900 to-neutral-800">
      <div className="lg:w-1/2 w-4/5 text-neutral-100 m-auto text-center min-h-screen flex flex-col flex-grow justify-center">
        <div className="flex flex-col flex-grow justify-evenly">
          <div className="drop-shadow-lg">
            <div className="flex m-auto justify-center my-12">
              <div className="-mr-32">
                <a href="https://www.linkedin.com/in/daniel-kouznetsov-489011127/">
                  <ProfileImage
                    image={
                      "https://raw.githubusercontent.com/kouznetsov1/personal_website/main/public/linkedin.png"
                    }
                    alt={"linkedin"}
                  />
                </a>
              </div>
              <div className="z-10">
                <ProfileImage
                  image={
                    "https://raw.githubusercontent.com/kouznetsov1/personal_website/main/public/selfie.jpg"
                  }
                  alt={"profilepicture"}
                />
              </div>
              <div className="-ml-32 z-0">
                <a href="https://github.com/kouznetsov1">
                  <ProfileImage
                    image={
                      "https://raw.githubusercontent.com/kouznetsov1/personal_website/main/public/gitprofilepic.png"
                    }
                    alt={"git"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-6xl lg:text-8xl font-extrabold">Hello!</h1>
            <h2 className="text-2xl lg:text-4xl font-medium mt-6">
              My name is Daniel Kouznetsov.
            </h2>
            <p className="lg:text-lg mt-4">{aboutMe}</p>
            <div className="mt-12">
              <h1>Check out what I'm up to down below!</h1>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <a href="#portfolio">
            <div className="animate-bounce mt-6">
              <ArrowDownwardIcon fontSize="large" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
