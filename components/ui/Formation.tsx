import React from "react";

const Formation = () => {
  return (
    <div className="flex flex-col justify-between items-center p-2 relative w-[400px] h-[506px] border rounded-2xl border-gray-400">
      <div className="flex flex-col justify-between w-full h-full p-4 rounded-[10px] bg-[#89C2D9]">
        <p className="text-center">Diplome de: </p>
        <p className="text-2xl font-medium  text-center">Secrétariat (G1)</p>
        <div>
          <p className="font-medium">donnant droit au poste comme : </p>
          <p>
            Assistant administratif, Secrétaire exécutif, Gestionnaire de bureau
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
