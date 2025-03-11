import Image from "next/image";
import Logo from "@/public/next.svg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
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
      <section className="min-h-fit h-[772px] flex justify-center items-center">
        <header className="w-[90%]">
          <section>
            <h1>Bienvenue au Lycée Technique F.M. Coulibaly</h1>
            <h3>
              Découvrez un établissement d'enseignement technique et
              professionnel de premier plan à Cotonou. Nous formons les futurs
              leaders dans divers domaines techniques.
            </h3>
            <div>
              <Button className="bg-background">En savoir plus</Button>
              <Button>Inscription</Button>
            </div>
          </section>
        </header>
      </section>
    </>
  );
}
