import Image from "next/image";
import Logo from "@/public/next.svg";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Roboto, Space_Grotesk } from "next/font/google";
import Learner from "@/app/assets/learner.png";
import DiplomeCard from "@/components/ui/diplomeCard";
import Link from "next/link";
import Formation from "@/components/ui/Formation";
const space = Space_Grotesk({
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <>
      {/* the navigation of the website */}
      <nav
        className={`flex w-full justify-between p-4 h-[72px] border-b-1 border-black items-center ${space.className} `}
      >
        <div className="flex w-2/3 gap-20">
          <Image
            width={100}
            height={100}
            src={Logo}
            alt="a logo of the school"
          />
          <ul className="flex w-1/3 min-w-fit justify-between gap-8">
            <li>inscription</li>
            <li>A propos</li>
            <li>Nos formation</li>
            <li>Blog</li>
            <li className="flex gap-2">
              Contacter-Nous <ChevronDown />
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Button variant="outline">Aide</Button>
          <Button>Info</Button>
        </div>
      </nav>
      {/* the header of the website */}
      <section className="min-h-fit h-[772px] flex justify-center items-center text-white">
        <header className="flex w-[95%] h-[95%] bg-secondary p-8 max-w-[1560px] rounded-2xl md:flex-row flex-col">
          <section className="w-1/2 h-full flex flex-col justify-center gap-10">
            <h1 className="text-6xl font-bold leading-[120%] bg-gradient-to-b from-background bg-clip-text text-transparent to-white ">
              Bienvenue au Lycée <br></br>Technique F.M.<br></br> Coulibaly{" "}
            </h1>
            <h3
              className={`${space.className} text-xl leading-[150%] tracking-wider font-light`}
            >
              Découvrez un établissement d'enseignement technique et
              professionnel de premier plan à Cotonou. Nous formons les futurs
              leaders dans divers domaines techniques.
            </h3>
            <div className="flex gap-4">
              <Button className="bg-background p-6 text-black">
                En savoir plus
              </Button>
              <Button
                variant="outline"
                className="p-6 border-white bg-transparent"
              >
                Inscription
              </Button>
            </div>
          </section>
          <Image
            src={Learner}
            alt="a picture of a student with a lot of books inb hands"
            width={740}
            height={673}
            className="object-cover grow"
          />
        </header>
      </section>
      <main className="flex flex-col justify-center pt-20 min-h-fit h-[1031px] ">
        <div className="w-full flex flex-col justify-center items-center md:pl-[20%] md:pr-[20%] p-0 gap-10">
          <h3 className="text-center text-xl w-fit">Formations</h3>
          <h2 className="text-4xl text-center font-medium w-fit">
            Découvrez nos formations techniques et professionnelles
          </h2>
          <p className="text-2xs w-fit text-center ">
            Le Lycée Technique F.M. Coulibaly propose une gamme variée de
            formations, allant du Baccalauréat technologique au Certificat
            d'Aptitude Professionnelle. Nos programmes sont conçus pour répondre
            aux besoins du marché et préparer les étudiants à des carrières
            réussies.
          </p>
        </div>
        <section className="pt-[500px] relative overflow-hidden h-full min-h-[1020px]">
          <div className="flex justify-center gap-16">
            <DiplomeCard
              Logo={Logo}
              space={space}
              roboto={roboto}
              diplom="Certificat d'Aptitude Professionnelle (CAP)"
              descrip="Formez-vous aux métiers techniques avec le CAP."
              css=" -rotate-z-35 origin-right!"
            />
            <DiplomeCard
              Logo={Logo}
              space={space}
              roboto={roboto}
              diplom="Baccalauréat Technologique et Professionnel"
              descrip="Obtenez votre Baccalauréat dans des filières variées."
              css=" from-[#B5E48C]! to-[#5BBB98]! bg-gradient-to-b! -translate-y-36 origin-center!"
            />
            <DiplomeCard
              Logo={Logo}
              space={space}
              roboto={roboto}
              diplom="Diplôme de Technicien (DT)"
              descrip="Devenez technicien qualifié grâce à notre DT."
              css="from-[#D9ED92]! to-[#52B69A]! bg-gradient-to-l! rotate-z-35"
            />
          </div>
          <div className=" absolute flex justify-center items-center w-[110%] h-full top-1/2 left-[-5%] bg-background rounded-tl-full rounded-tr-full z-50 shad ">
            <div className="relative max-w-[100vw] w-full flex justify-center h-1/2 gap-8">
              <Button className="p-6" variant='outline'>En Savoir Plus</Button>
              <Link href="/" className="w-fit h-12 flex items-center gap-2 underline">S'inscrire <ChevronRight /> </Link>
            </div>
          </div>
        </section>
        <section className="w-full h-full">
          <div className="w-1/2">
            <h2 className="text-center text-xl w-fit">Formation</h2>
            <p className="text-4xl text-left font-medium w-fit">Découvrez nos formations variées pour un avenir professionnel prometteur et épanouissant.</p>
          </div>
          {/* slider for all the formation */}
          <section className=" h-fit p-12">
            <Formation />
          </section>
        </section>
      </main>
    </>
  );
}
