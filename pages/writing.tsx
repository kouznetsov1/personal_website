import type { NextPage } from "next";
import Head from "next/head";

const Writing: NextPage = () => {
  return (
    <div className="w-full">
      <div>
        <Head>
          <title>Writing | Daniel Kouznetsov</title>
          <link rel="icon" href="static/favicon.ico" />
        </Head>
      </div>
      <div className="flex flex-col w-full space-y-4">
        <p className="text-2xl">Writing</p>
        <p className="text-xs text-opacity-75 text-gray-50">
          Some day I will start writing here...
        </p>
      </div>
    </div>
  );
};

export default Writing;
