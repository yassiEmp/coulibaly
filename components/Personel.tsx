import Image from "next/image";
import React from "react";

const Personel = ({placeHolder}:{placeHolder: any}) => {
  return (
    <div className="flex flex-col items-center p-0 gap-6 w-[405px] max-w-full h-[273px] rounded-none flex-grow self-center justify-self-center min-h-fit justify-between">
      <div>
        <Image
          src={placeHolder}
          alt="a picture of him/her"
          className="w-16 h-16 overflow-hidden object-cover rounded-full"
        ></Image>
      </div>
      <p className="font-bold">Jean Dupont</p>
      <p>Directeur Général</p>
      <p className="text-center">
        Passionné par l'éducation et l'innovation, il guide notre établissement
        vers l'excellence.
      </p>
    </div>
  );
};

export default Personel;
