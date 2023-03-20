import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { aboutMe } from "./profileData";
import { ProfileImage } from "./ProfileImage";

export const Profile = () => {
  const linkedinURL =
    "https://www.linkedin.com/in/daniel-kouznetsov-489011127/";
  const githubURL = "https://www.github.com/kouznetsov1";

  return (
    <div
      className="min-h-screen bg-gradient-to-tr animate-gradient from-neutral-800 to-neutral-900"
      style={{ backgroundSize: "400% 400%" }}
    >
      <div className="lg:w-1/2 w-4/5 text-neutral-100 m-auto text-center justify-center">
        <div className="drop-shadow-lg">
          <div className="pt-16">
            <div className="flex m-auto justify-center">
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
          <div className="">
            <h1 className="text-6xl lg:text-8xl font-extrabold m-6 mt-20">
              Hello!
            </h1>
            <h2 className="text-2xl lg:text-4xl m-6 font-medium">
              My name is Daniel Kouznetsov.
            </h2>
            <p className="lg:text-lg m-6">{aboutMe}</p>
          </div>
          <div className="mt-14 lg:mt-24">
            <h1>Check out what I'm up to down below!</h1>
          </div>
          <div className="m-14">
            <a href="#portfolio">
              <div className="animate-bounce w-1/2 m-auto">
                <ArrowDownwardIcon fontSize="large" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
