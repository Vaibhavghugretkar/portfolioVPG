import Link from "next/link";
// import {Spotlight} from './ui/Spotlight'
import { Button } from "./ui/moving-border";
import Image from "next/image";

function HeroSection() {
  return (
 
<div className="bg-gradient-to-r from-black to-gray-900 w-3/2 sm:items-center sm:justify-center align-middle">

      <div className="h-auto md:h-[40 rem] w-full  rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
        <div className="align-middle items-center sm:align-middle sm:justify-center sm:items-center">
      <Image src="/Grey_minimalist_business_project_presentation___1_-removebg-preview.png" width={900} height={900} className="mt-16" alt=""/>
      </div>
        <div className="mt-[-144px] p-12 relative z-10 w-full text-center">
          <p className="mt-12 text-white lg:text-3xl sm:text-xl text-center">
            Hey, there I'm
          </p>
          <h1 className="mt-15  text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 md:mt-20rem text-2xl md:text-6xl font-bold sm:&apos;6xl">

            Vaibhav Ghugretkar
          </h1>

          <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Enthusiastic frontend developer committed to crafting immersive and
            user-centric web experiences through innovative design and
            development practices.
          </p>

          <div className="mt-5">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black  text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl"
          >
            <Link href={"#contact"}> Contact Me</Link>
          </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroSection;
