import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

// Sample card data
const cardData = [
  {
    id: 1,
    title: "Lost and Found Website",
    description: "This is a simple lost and found website created using React and Firebase",
    imageSrc: "/recliam.jpg",
    tryNowLink: "https://findurs.netlify.app",
  },
  {
    id: 2,
    title: "Music Class Website",
    description: "Music class website built using Next.js and Aceertinity UI",
    imageSrc: "/muscClass.jpg",
    tryNowLink: "https://musiclasses.vercel.app", 
  },
  {
    id: 3,
    title: "Nithya Foundation NGO website",
    description: "Website for a NGO names Nithya Foundation which creates awareness about menstrual health and hygiene",
    imageSrc: "/nithyaf.jpg",
    tryNowLink: "https://regal-souffle-f9981e.netlify.app",
  },
  {
    id: 4,
    title: "Axiom News - News app",
    description: "News website built using react which provides with latest news",
    imageSrc: "/axiomNews.jpg",
    tryNowLink: "https://vaibhavghugretkar.github.io/axiomnewsapp",
  },

];

export default function Courses() {
  return (
    <div id="projects" className='bg-gradient-to-r from-black to-gray-900 text-white min-h-screen py-12 pt-36'>
      <h2 className="text-3xl lg:text-5xl text-teal-600 font-semibold tracking-wide uppercase text-center">Projects</h2> 
      <div className="flex flex-wrap justify-center">
        {cardData.map((card) => (
          <CardContainer key={card.id} className="inter-var m-4">
            <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {card.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={card.imageSrc}
                  height={400}
                  width={600}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={card.title}
                />
              </CardItem>
              <div className="flex justify-center items-center mt-4">
                <CardItem translateZ={20} as="button" className="mt-6 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  <Link href={card.tryNowLink}>
                    Try Now
                  </Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
