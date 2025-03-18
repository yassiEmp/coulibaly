import Image from "next/image";
import Logo from "@/public/next.svg";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  CornerDownRight,
  Mail,
  MapPin,
  Menu,
  MenuIcon,
  PhoneIcon,
} from "lucide-react";
import { Roboto, Space_Grotesk } from "next/font/google";
import Learner from "@/app/assets/learner.png";
import DiplomeCard from "@/components/ui/diplomeCard";
import Link from "next/link";
import { CarouselUi } from "@/components/CarouselUi";
import PlaceHolder from "@/app/assets/placeHolder.svg";
import Personel from "@/components/Personel";
import Review from "@/components/Review";
const space = Space_Grotesk({
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Desktop() {
  return (
    <>
      {/* the navigation of the website */}
      <nav
        className={`flex w-full justify-between p-4 h-[72px] border-b-1 border-black items-center ${space.className} `}
      >
        <div className="flex w-full gap-12 justify-start">
          <Image
            width={100}
            height={100}
            src={Logo}
            alt="a logo of the school"
          />
          <ul className="md:flex hidden w-1/3 min-w-fit justify-between gap-8  items-center">
            <li>inscription</li>
            <li>A propos</li>
            <li>Nos formation</li>
            <li>Blog</li>
            <li className="flex gap-2">
              Contacter-Nous <ChevronDown />
            </li>
          </ul>
          <Menu
            className="w-[50px] self-end ml-auto hidden max-md:block"
            size={60}
          />
        </div>
      </nav>
      {/* the header of the website */}
      <section className="min-h-fit h-fit md:p-10 p-4 flex justify-center items-center text-white">
        <header className="flex w-[95%] h-[95%] bg-secondary md:p-8 p-4 max-w-[1560px] rounded-2xl min-[1150px]:flex-row flex-col">
          <section className="min-[1150px]:w-1/2 w-full flex flex-col justify-center gap-10 ">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold leading-[120%] bg-gradient-to-b from-background bg-clip-text text-transparent to-white ">
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
              <div className="md:flex hidden w-full gap-3">
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
              <Button className="bg-background h-fit p-4 w-full min-w-[230px] text-black md:hidden flex text-wrap">
                <p className="text-[calc(1vw+1rem)] max-[500px]:text-wrap ">👉 Inscrivez-vous aujourd&apos;hui !</p>
              </Button>
            </div>
          </section>
          <Image
            src={Learner}
            alt="a picture of a student with a lot of books inb hands"
            width={740}
            height={673}
            className="object-cover grow min-[1150px]:w-1/2 w-full max-w-[740px]"
          />
        </header>
      </section>
      <main className="flex flex-col justify-center pt-20 min-h-fit h-[1031px] ">
        <section className="w-full flex flex-col justify-center items-center md:pl-[20%] md:pr-[20%] p-4 gap-10">
          <h3 className="text-center text-xl w-fit">Formations</h3>
          <h2 className="text-4xl text-center font-medium w-fit text-[calc(1.5vw+1rem)] ">
            Découvrez nos formations techniques et professionnelles
          </h2>
          <p className="text-2xs w-fit text-center ">
            Le Lycée Technique F.M. Coulibaly propose une gamme variée de
            formations, allant du Baccalauréat technologique au Certificat
            d'Aptitude Professionnelle. Nos programmes sont conçus pour répondre
            aux besoins du marché et préparer les étudiants à des carrières
            réussies.
          </p>
        </section>
        <section className="pt-[500px] relative overflow-hidden h-full min-h-[1020px]">
          <div className="flex justify-center gap-8">
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
          <div className=" absolute flex items-start pt-20 justify-center w-[110%] min-h-fit h-full top-1/2 left-[-5%] bg-background rounded-tl-full rounded-tr-full z-50 shad ">
            <div className="relative max-w-[100vw] w-full flex md:justify-center! justify-start grow gap-8 flex-col items-center ">
              <Button className="p-6" variant="outline">
                En Savoir Plus
              </Button>
              <Link
                href="/"
                className="w-fit h-12 flex items-center gap-2 underline"
              >
                S'inscrire <ChevronRight />{" "}
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full h-full md:p-16 p-4">
          <div className="md:w-1/2 w-full">
            <h2 className="text-center text-xl w-fit">Formation</h2>
            <p className="headerText">
              Découvrez nos formations variées pour un avenir professionnel
              prometteur et épanouissant.
            </p>
          </div>
          {/* slider for all the formation */}
          <section className="md:p-12 p-4 w-full h-fit">
            {/* <Formation /> */}
            <CarouselUi />
            {/* <Formation /> */}
          </section>
        </section>
        <section className="w-full h-full lg:p-16 p-4 flex justify-around items-center gap-12 min-[1024px]:flex-row  flex-col">
          <section className="min-[1024px]:w-full! h-full max-h-fit flex justify-around flex-col gap-12  pl-2 pr-2 w-full">
            <div className="md:w-1/2 w-full">
              <h2 className="text-center text-xl md:w-fit text-wrap w-full">Avantages</h2>
              <p className="headerText w-full">
                Pourquoi choisir le Lycée Technique Coulibaly ?
              </p>
            </div>

            <p>
              Étudier au Lycée Technique F.M. Coulibaly, c'est bénéficier d'une
              formation de qualité, soutenue par des partenariats solides avec
              des entreprises. Nos élèves profitent de stages pratiques qui
              favorisent leur insertion professionnelle.
            </p>
            <div className="w-full flex min-[500px]:flex-row flex-col gap-8">
              <div className="md:w-1/2 w-full h-56">
                <Image src={Logo} alt="" width={100} height={100} />
                <p className="font-bold text-2xs">Partenariats solides</p>
                <p>
                  Collaboration avec des entreprises locales pour des
                  opportunités d'apprentissage enrichissantes.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-56">
                <Image src={Logo} alt="" width={100} height={100} />
                <p className="font-bold text-2xs">Stages pratiques.</p>
                <p>
                  Des stages en entreprise pour acquérir une expérience concrète
                  et valorisante.
                </p>
              </div>
            </div>
            <div className="flex gap-4 min-[500px]:flex-row flex-col">
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
          <div className="grow h-full flex justify-center items-center bg-white rounded-2xl w-full ">
            <Image src={PlaceHolder} alt="a descriptive picture " className='w-full h-full object-contain '></Image>
          </div>
        </section>
        <section className="flex flex-col items-center min-[500px]:p-[112px_64px] p-4 gap-20 w-full h-fit bg-gradient-to-r from-[#ADE8F4] to-[#89C2D9]">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center text-xl w-fit">Équipe</h2>
            <p className="headerText">Notre équipe</p>
            <p>Des professionnels dédiés à votre réussite académique.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 justify-items-center w-full max-w-[1900px] min-w-fit ">
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
            <Personel placeHolder={PlaceHolder} />
          </div>
        </section>
        <section className="flex flex-col items-start min-[500px]:p-[112px_64px] p-4 gap-20 w-full min-h-fit h-[717.89px] bg-gradient-to-r from-[#81C3D7] to-[#89C2D9]">
          <div className="w-1/2 min-w-fit">
            <p className="headerText text-3xl">Témoignages clients</p>
            <p>Des expériences enrichissantes et formatrices au Lycée.</p>
          </div>
          <div className="grid gap-8  lg:grid-cols-3 grid-cols-1 md:grid-cols-2 min-h-fit">
            <Review font={space} />
            <Review font={space} />
            <Review font={space} />
            <Review font={space} />
            <Review font={space} />
            <Review font={space} />
          </div>
        </section>
        <section className="h-full flex flex-col min-[500px]:p-16 p-4 gap-16">
          <div>
            <p className="font-bold">contact</p>
            <h2 className="headerText md:text-5xl! text-4xl">Nous Contacter</h2>
            <p>Pour toute demande d'information, contactez-nous directement.</p>
          </div>
          <section className="flex justify-between gap-16 md:flex-row flex-col">
            <div className=" flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2 h-1/3">
                <Mail />
                <p>Email</p>
                <p className="font-semibold">itcoulibaly@gmail.com</p>
              </div>
              <div className="w-full flex flex-col gap-2 h-1/3">
                <PhoneIcon />
                <p className="font-semibold">+229 21 31 08 35</p>
                <p>Bureau</p>
                <p>Cotonou, Bénin</p>
              </div>
              <div className="w-full flex flex-col gap-2 h-1/3">
                <MapPin />
                <Link href={"#"} className="flex hover:underline">
                  <p>Obtenir l'itinéraire </p>
                  <ChevronRight />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl col-span-2 flex justify-center bg-white w-full max-w-[832px] h-[516px]">
              <Image
                src={PlaceHolder}
                alt="a picture of the lycée technique coulibaly"
              />
            </div>
          </section>
        </section>
        <footer className="w-full flex flex-col justify-center items-center bg-amber-50">
          <hr color="black" className="w-full"></hr>
          <div>
            <p>© 2024 Lycée Technique F.M. Coulibaly. Tous droits réservés.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
