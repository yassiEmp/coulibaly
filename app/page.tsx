import Image from "next/image";
import Logo from "@/public/next.svg";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <nav className="flex w-full justify-around h-[72px] border-b-2 border-black items-center">
        <Image width={50} height={50} src={Logo} alt="a logo of the school" />
        <ul className="flex w-1/3 min-w-fit justify-between">
          <li>inscription</li>
          <li>A propos</li>
          <li>Nos formation</li>
          <li>Blog</li>
          <li>Contacter-Nous</li>
        </ul>
        <div>
          <Button variant="outline">Aide</Button>
          <Button>Info</Button>
        </div>
      </nav>
      <section></section>
    </>
  );
}
