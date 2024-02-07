interface Skill {
  name: string;
  iconSrc: string;
}

interface Course {
  name: string;
  link: string;
}

export const skills: Skill[] = [
  {
    name: "Typescript",
    iconSrc: "typescript-",
  },
  {
    name: "Python",
    iconSrc: "python-",
  },
  {
    name: "React",
    iconSrc: "react-",
  },
  {
    name: "Node & Express",
    iconSrc: "node-",
  },
  {
    name: "Next.js",
    iconSrc: "next-",
  },
  {
    name: "MongoDB",
    iconSrc: "mongodb-",
  },
  {
    name: "OpenAI",
    iconSrc: "openai-",
  },
  {
    name: "Tailwind",
    iconSrc: "tailwind-",
  },
];

export const courses: Course[] = [
  {
    name: "Neural Networks and Learning Systems",
    link: "https://studieinfo.liu.se/en/kurs/tbmi26",
  },
  {
    name: "Machine Learning",
    link: "https://studieinfo.liu.se/en/kurs/tdde01",
  },
  {
    name: "Artificial Intelligence",
    link: "https://studieinfo.liu.se/en/kurs/tddc17",
  },
  {
    name: "Advanced Machine Learning",
    link: "https://studieinfo.liu.se/en/kurs/tdde15",
  },
  {
    name: "Advanced Project Course - AI and Machine Learning",
    link: "https://studieinfo.liu.se/en/kurs/tdde19",
  },
  {
    name: "Computer Security",
    link: "https://studieinfo.liu.se/en/kurs/tsit02",
  },
  {
    name: "Advanced Web Programming",
    link: "https://studieinfo.liu.se/kurs/tddd27",
  },
  {
    name: "Concurrent Programming and Operating Systems",
    link: "https://studieinfo.liu.se/kurs/tddb68",
  },
];
