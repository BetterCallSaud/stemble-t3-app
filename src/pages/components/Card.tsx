import Image, { type StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  name?: string;
  desc?: string;
  abilities?: string;
  src: string | StaticImageData;
}

const Card: React.FC<CardProps> = ({ name, desc, abilities, src }) => {
  return (
    <div className="mx-10 w-96 rounded-lg border-8 border-purple-800 font-sans">
      <h1 className="w-full bg-purple-950 p-4 font-market text-2xl">{name}</h1>
      <div className="flex flex-wrap text-center">
        <div className="flex w-1/2 flex-col bg-violet-600">
          <p className="p-2 text-sm">{desc}</p>

          {/* ABILITIES section */}
          <section>
            <h1 className="bg-violet-900 font-market">ABILITIES</h1>
            <p className="p-2 text-sm">{abilities}</p>
          </section>
        </div>
        <div className="flex w-1/2 items-center justify-center bg-white">
          <Image src={src} className="h-fit rounded-xl px-2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
