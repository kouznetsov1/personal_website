import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GeistSans } from "geist/font/sans";
import { Layout } from "components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${GeistSans.className} bg-gray-950 text-gray-50 w-full items-center h-full flex flex-col`}
    >
      <div className="w-11/12 sm:w-4/6 lg:w-1/2">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </main>
  );
}

export default MyApp;
