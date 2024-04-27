import { Input } from "./ui/input";
// import { Button } from "./ui/moving-border";
export default function Contact() {
  return (
    <div className="h-[28rem] w-full dark:bg-black  relative flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl max-auto px-4 sm:px-6"></div>
      <h1 className="mt-2 leading-8 font-extrabold tracking-tight text-white sm:text-4xl lg:text-4xl">
        Contact Us
      </h1>
      <div className="flex h-[30rem] flex-col items-center justify-center mt-[-90px]">
        <Input />
      <button className="px-3 py-3 w-28 font-bold mt-6 rounded-lg border border-teal-600 text-white text-28 bg-black  hover:bg-teal-600 hover:text-black transition duration-200" >
        Submit
      </button>
      </div>
   
    </div>
  );
}
