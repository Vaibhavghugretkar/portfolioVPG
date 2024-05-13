import { Input } from "./ui/input";
export default function contact() {
  return (
    <div id="contact" className="h-[32rem] w-full bg-gradient-to-r from-black to-gray-900 relative flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-7xl max-auto px-4 sm:px-6"></div>
      <h2 className="text-3xl lg:text-5xl text-teal-600 font-semibold tracking-wide uppercase text-center">Contact</h2> 

      <div className="flex h-[32rem] flex-col items-center justify-center mt-[-72px] ">
        <Input className="h-12 lg:w-96 mt-6 sm:w-72"/>
      <button className="px-3 py-3 w-28 font-bold mt-6 rounded-lg border border-teal-600 text-white text-28 bg-black  hover:bg-teal-600 hover:text-black transition duration-200" >
        Submit
      </button>
      </div>
   
    </div>
  );
}
