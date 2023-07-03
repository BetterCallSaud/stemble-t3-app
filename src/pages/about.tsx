import Head from "next/head";
import Link from "next/link";
import Card from "./components/Card";
import saudDP from "../media/saud.jpg";
import hammadDP from "../media/hammad.jpg";

const hammadDesc = "CEO of Stemble, builds GPT apps, very down to earth, has a lot of good ideas all the time";
const saudDesc = "CTO of Stemble, alias Sheikh Techno, also builds cool shit, makes killer content, decoding the human race";

const hammadAbilities = "code, ideation, eship, writing, discussing things, islam";
const saudAbilities = "code, content, educ, engg, eship, islam";

export default function About() {
  return (
    <>
      <Head>
        <title>Who are we?</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav className="bg-[#3e0094] p-2 text-center font-market text-2xl text-white">
        <Link href={"/"}>Stemble</Link>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#4500a5] to-[#1f2042] text-white">
        <div className="container flex flex-col items-center justify-center text-center gap-12 px-4 py-16">
          <h1 className="font-market text-4xl">Who are we?</h1>
          <div className="text-xl">
            <p>We are just builders: <b>people who want to 🔧 cool 💩</b></p>
            <p>As of now, it{"'"}s just the two of us building Stemble.</p>
          </div>
          <div className="flex items-center justify-evenly">
            <Card name={"Hammad Nasir"} desc={hammadDesc} abilities={hammadAbilities} src={hammadDP}/>
            <Card name={"Saud Hashmi"} desc={saudDesc} abilities={saudAbilities} src={saudDP}/>
          </div>
        </div>
        <footer className="relative bottom-2 text-white">
          Made by <span className="font-market ">Sheikh Techno</span> with 💜
        </footer>
      </main>
    </>
  );
}
