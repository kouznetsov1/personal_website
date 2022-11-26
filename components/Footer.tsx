import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className="w-full h-28 bg-black mt-12 text-white text-center text-xl">
      <div className="">
        <div className="p-4">
          <p>Get in touch!</p>
        </div>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/daniel-kouznetsov-489011127/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="mailto:kouznetsov1996@gmail.com">
            <EmailIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};
