import Link from "next/link";
import {Spotlight} from './ui/Spotlight'
import {Button} from './ui/moving-border'



function HeroSection() {
  return (
    <div className="h-auto md:h-[40 rem] w-full  rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">

<Spotlight className="top-0 left--10 md:left-60 md:-top-20"
        fill="white" />

      <div className=" mt-20 p-12 relative z-10 w-full text-center">

      <h1 className="mt-20  text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 md:mt-20rem text-4xl md:text-7xl font-bold">Master the art of Music</h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into comprehensive music courses and transform your music journey
          today. Whether you are begineer or want to refine your skills, Join us
          to unlock your potential.
        </p>

        <div className="mt-4">
<Link href={"/courses"}>

</Link>
        </div>
<Button  borderRadius="1.75rem"
        className="bg-white dark:bg-black  text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
    Explore Courses
</Button>
      </div>
    </div>
  );
}

export default HeroSection;
