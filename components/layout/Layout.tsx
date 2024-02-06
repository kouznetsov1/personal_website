import Link from "next/link";
import { Hand, Linkedin, Mail } from "lucide-react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between w-full h-auto min-h-screen gap-8 py-6 sm:py-10">
      <nav className="top-0 flex flex-row justify-between w-full">
        <div className="flex flex-row items-center gap-2 text-3xl font-bold">
          <span>Hello!</span>
        </div>
        <div className="flex flex-row gap-3 text-gray-300">
          <Link href="/projects">
            <button className="flex items-center justify-center px-4 py-2 border rounded-md border-opacity-20 border-gray-50 hover:bg-gray-200 hover:bg-opacity-5">
              Projects
            </button>
          </Link>
          <Link href="/work">
            <button className="flex items-center justify-center px-4 py-2 border rounded-md border-opacity-20 border-gray-50 hover:bg-opacity-5 hover:bg-gray-200">
              Work
            </button>
          </Link>
          <Link href="/writing">
            <button className="flex items-center justify-center px-4 py-2 border rounded-md hover:bg-opacity-5 border-opacity-20 border-gray-50 hover:bg-gray-200">
              Writing
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex w-full h-full">{children}</div>
      <div className="bottom-0 flex flex-row gap-2">
        <a
          href="mailto:kouznetsov1996@gmail.com"
          className="flex items-center justify-center border rounded-full border-opacity-15 group bg-gradient-to-br from-gray-800 to-gray-900 border-gray-50 size-12"
        >
          <div>
            <Mail className="transition-all duration-150 size-5 group-hover:size-[22px]" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-kouznetsov-489011127/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center border rounded-full border-opacity-15 group bg-gradient-to-br from-gray-800 to-gray-900 border-gray-50 size-12"
        >
          <div>
            <Linkedin className="transition-all duration-150 size-5 group-hover:size-[22px] " />
          </div>
        </a>
      </div>
    </div>
  );
};
