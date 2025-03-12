import { NextFont } from 'next/dist/compiled/@next/font'
import Image from 'next/image'
import React from 'react'

const DiplomeCard = ({Logo,space,roboto,diplom,descrip,css}:{Logo:any,space:NextFont,roboto:NextFont,diplom:string,descrip:string,css?: string}) => {
  return (
    <div className={`card min-w-[405px] w-[405px] h-[479px] rounded-lg flex flex-col items-center p-[14px_16px] gap-[100px] relative diplom -translate-y-24 origin-right bg-gradient-to-r from-[#34A0A4] to-[#168AAD] ${css}`}>
            <Image
              src={Logo}
              alt="a logo of the school "
              width={90}
              height={90}
              className=""
            ></Image>
            <div className="flex flex-col gap-8 text-center w-full">
              <p
                className={`w-full h-fit font-bold text-[32px] leading-[130%] text-center text-black ${space.className}`}
              >
                {diplom}
              </p>
              <p
                className={`w-full h-fit font-normal text-base text-wrap leading-[150%] text-center text-black ${roboto.className} `}
              >
                {descrip}
              </p>
            </div>
          </div>
  )
}

export default DiplomeCard
