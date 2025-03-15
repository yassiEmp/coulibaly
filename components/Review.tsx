import placeHolder from "@/app/assets/placeHolder.svg";
import { StarIcon, Stars } from "lucide-react";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import React from "react";

const Review = ({font}:{font?:NextFont}) => {
  return (
    <div className="w-[550px] max-w-full min-h-fit h-fit flex flex-col gap-2">
      {/* for the start rating  */}
      <div className="flex gap-0.5">
      <StarIcon fill="black" className="" />
      <StarIcon fill="black" className="" />
      <StarIcon fill="black" className="" />
      <StarIcon fill="black" className="" />
      <StarIcon fill="black" className="" />
      <StarIcon fill="black" className="" />
      </div>
      {/* the person that had commented */}
      <div className="flex gap-4">
        <div className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full">
          <Image
            src={placeHolder}
            alt="the picture of a person"
            width={40}
            height={40}
            className="w-3/4 h-auto"
          ></Image>
        </div>
        <div>
          <p className="font-semibold">Marie Dupont</p>
          <p>Ancienne élève, Entreprise X</p>
        </div>
      </div>
      <p className={`font-bold ${font?font.className:""}`}>
        "Le Lycée Technique Coulibaly m'a ouvert des portes vers l'avenir. Grâce
        à leur formation, j'ai pu décrocher un emploi rapidement."
      </p>
    </div>
  );
};

export default Review;

