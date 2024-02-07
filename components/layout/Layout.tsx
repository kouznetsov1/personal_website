import Link from "next/link";
import { Hand, Linkedin, Mail } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/Avatar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between w-full h-auto min-h-screen gap-8 py-6 md:flex-row md:py-20">
      <div className="flex flex-col space-y-4 md:w-72">
        <div className="flex flex-col space-y-2">
          <Link
            href="/"
            className="z-10 flex flex-row items-center justify-between w-full px-4 py-4 font-medium transition-colors duration-150 border rounded-md bg-gray-950 border-opacity-20 hover:border-opacity-35 border-gray-50"
          >
            <p>I&apos;m Daniel</p>
            <Avatar>
              <AvatarImage
                src="https://media.licdn.com/dms/image/D4D03AQGB3EnIzprO6A/profile-displayphoto-shrink_800_800/0/1684498437871?e=1712793600&v=beta&t=iVRcCPM5HrLWa0wT4pKxX_S6dm_cKiLKKJGzJNcZhLk"
                alt="Daniel Kouznetsov"
              />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
          </Link>
          <Link
            href="/projects"
            className="z-10 flex items-center w-full h-10 px-4 font-medium transition-colors duration-150 rounded-md bg-gray-50 bg-opacity-10 hover:bg-opacity-15"
          >
            Projects
          </Link>
          <Link
            href="/work"
            className="z-10 flex items-center w-full h-10 px-4 font-medium transition-colors duration-150 rounded-md bg-gray-50 bg-opacity-10 hover:bg-opacity-15"
          >
            Work
          </Link>
          <Link
            href="/writing"
            className="z-10 flex items-center w-full h-10 px-4 font-medium transition-colors duration-150 rounded-md bg-gray-50 bg-opacity-10 hover:bg-opacity-15"
          >
            Writing
          </Link>
        </div>
        <div className="flex flex-row w-full gap-2">
          <a
            href="mailto:kouznetsov1996@gmail.com"
            className="flex items-center justify-center border rounded-full border-opacity-15 group bg-gradient-to-br from-gray-800 to-gray-900 border-gray-50 size-10"
          >
            <Mail className="transition-all duration-150 size-4 group-hover:size-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-kouznetsov-489011127/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center border rounded-full border-opacity-15 group bg-gradient-to-br from-gray-800 to-gray-900 border-gray-50 size-10"
          >
            <Linkedin className="transition-all duration-150 size-4 group-hover:size-[18px] " />
          </a>
        </div>
      </div>
      <div className="flex w-full h-full">{children}</div>
    </div>
  );
};
