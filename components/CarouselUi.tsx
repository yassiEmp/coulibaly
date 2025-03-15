"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Formation from "./ui/Formation"

export function CarouselUi() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full perspective-midrange"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
              <Formation />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" md:block hidden "/>
      <CarouselNext className=" md:block hidden "/>
    </Carousel>
  )
}
