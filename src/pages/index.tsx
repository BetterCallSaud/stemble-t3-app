import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../media/searchicon.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>🟣 Stemble | For Intellectuals. From Intellectuals.</title>
        <meta
          name="description"
          content="At Stemble, we are making STEM education fun and accessible for everyone. Moreover, with the power of open-source AI models and tools, our edtech products perform better than the status quo."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className="w-full fixed bg-[#4400a3] py-4 text-white flex flex-wrap justify-center font-bold">
        <Link className="mr-12 hover:underline decoration-indigo-400 decoration-2 underline-offset-[1rem]" href={"/about"}>About</Link>
        <Link className="mr-12 hover:underline decoration-indigo-400 decoration-2 underline-offset-[1rem]" href={"https://stemble.substack.com"}>Blog</Link>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4500a5] to-[#1f2042]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="font-market text-5xl text-white sm:text-[5rem]">
            Stemble
          </h1>
          <p className="rounded-full bg-white px-4 py-3 font-sans text-xl text-indigo-600 inline-flex">
            <Image className="mr-3" src={SearchIcon} width={25} height={25} alt="search icon"/> 
            {" "} We are making STEM education fun and accessible.
          </p>
          <div className="flex justify-between">
            <a href="https://stembleai.vercel.app" rel="noreferrer" target="_blank">
              <button className="rounded-md mx-4 bg-indigo-500 hover:bg-indigo-400 p-4 text-lg font-black text-white">
                Try Stemble.ai
              </button>
            </a>
            <a href="https://youtube.com/@Stemble_" rel="noreferrer" target="_blank">
            <button className="rounded-md mx-4 bg-white text-indigo-500 hover:text-white hover:bg-red-700 p-4 text-lg font-black ">
                Visit Channel
              </button>
            </a>
          </div>
        </div>
        <footer className="fixed bottom-2 text-white">Made by <span className="font-market ">Sheikh Techno</span> with 💜</footer>
      </main>
    </>
  );
}
