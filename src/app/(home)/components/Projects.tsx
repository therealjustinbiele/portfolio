// 'use client'
// import Link from 'next/link'
// import React from 'react'
// import { Title } from '@/components/Title'
// import { HeroParallax } from '@/components/HeroParallax'
// import { ContainerScroll as AnimatedScroll } from '@/components/AnimatedScroll'
// import { SiAmazonaws, SiContentful, SiCss3, SiDocker, SiElectron, SiGoogleanalytics, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextui, SiReact, SiRedux, SiTsnode, SiTypescript } from 'react-icons/si'

// export default function Projects() {
//     const projects = [
//         { title: 'Bethesda.net', link: 'https://bethesda.net/', thumbnail: '/bethesda.png' },
//         { title: 'Bethesda Launcher', link: 'https://bethesda.net/en/article/2RXxG1y000NWupPalzLblG/sunsetting-the-bethesda-net-launcher-and-migrating-to-steam', thumbnail: '/bethesdalauncher.png' },
//         { title: 'Tespa', link: 'https://tespa.org', thumbnail: '/tespa.png' },
//         { title: 'Fluent SMS', link: 'https://fluentagent.com/', thumbnail: '/tespa.png' },
//         { title: 'Heads Up Safe', link: 'https://www.linkedin.com/company/heads-up-display-inc-/', thumbnail: '/headsup.png' },
//     ]
//     return (
        // <div className="pt-50 flex flex-col justify-around items-center">
        //     <Title text="Projects" className="-rotate-6"></Title>
        //     {/* <HoverEffect items={technologies} /> */}
        //     {/* <HeroParallax products={projects}/> */}
        //     <AnimatedScroll titleComponent={<h1>Hire me please</h1>}>
        //         <div className="pt-1000 w-full h-100 bg-indigo-500">
        //             Hello there
        //         </div>
        //     </AnimatedScroll>
        // </div>
//     )
// }

"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Title } from "@/components/Title";
 
export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
 
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
 
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
 
  useOutsideClick(ref, () => setActive(null));
 
  return (
    <>
      <div className="mb-10 flex flex-col justify-around items-center">
        <Title text="Projects" className="-rotate-6"></Title>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-scroll"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
 
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
 
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
 
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
 
const cards = [
  {
    description: "Bethesda",
    title: "Bethesda.net",
    src: "/bethesda.png",
    ctaText: "Visit",
    ctaLink: "https://bethesda.net",
    content: () => {
      return (
        <div>
          <h1 className="text-2xl mb-5">Stack</h1>
          <ul>
            <li>&gt; React</li>
            <li>&gt; Redux</li>
            <li>&gt; Material UI</li>
            <li>&gt; Contentful</li>
            <li>&gt; AWS services</li>
          </ul>
          <div className="w-full h-1 bg-indigo-500 my-5"></div>
          <p>
            Bethesda.net is the official website and online service platform for Bethesda Softworks, offering game information and purchases, community engagement through forums, support for mods and content creation, news and updates on games, account management, and customer support resources.          </p>
          <p></p>
        </div>
      );
    },
  },
  {
    description: "Bethesda",
    title: "Bethesda Launcher",
    src: "/bethesdalauncher.png",
    ctaText: "Visit",
    ctaLink: "https://bethesda.net/en/article/2RXxG1y000NWupPalzLblG/sunsetting-the-bethesda-net-launcher-and-migrating-to-steam",
    content: () => {
      return (
        <div>
          <h1 className="text-2xl mb-5">Stack</h1>
          <ul>
            <li>&gt; React</li>
            <li>&gt; Redux</li>
            <li>&gt; Electron</li>
            <li>&gt; GoLang / gRPC</li>
            <li>&gt; Django</li>
            <li>&gt; MySQL</li>
          </ul>
          <div className="w-full h-1 bg-indigo-500 my-5"></div>
          <p>
          The Bethesda Launcher was a digital distribution platform and game launcher developed by Bethesda Softworks. It allowed users to purchase, download, and play Bethesda games directly from the service. The launcher also provided updates for games, managed installed games, and supported modding for titles like "The Elder Scrolls V: Skyrim" and "Fallout 4." Additionally, it featured news updates and community integration. However, in 2022, Bethesda announced that they would be retiring the Bethesda Launcher and migrating its features and user libraries to Steam.
          </p>
        </div>
      );
    },
  },
 
  {
    description: "Blizzard",
    title: "Tespa",
    src: "/tespa.png",
    ctaText: "Visit",
    ctaLink: "https://www.tespa.org",
    content: () => {
      return (
        <div>
        <h1 className="text-2xl mb-5">Stack</h1>
        <ul>
          <li>&gt; jQuery</li>
          <li>&gt; Express</li>
          <li>&gt; AWS services</li>
          <li>&gt; MySQL / Sequelize</li>
        </ul>
        <div className="w-full h-1 bg-indigo-500 my-5"></div>
        <p>
          Tespa.org, founded by Blizzard Entertainment, was dedicated to supporting collegiate esports by organizing leagues and tournaments for games like "Overwatch" and "Hearthstone," building campus gaming communities, offering scholarships and prizes, providing networking opportunities, and giving exclusive in-game rewards to participants.
        </p>
      </div>
      );
    },
  },
  {
    description: "Heads Up",
    title: "Heads Up Display",
    src: "/headsup.png",
    ctaText: "Visit",
    ctaLink: "https://www.linkedin.com/company/heads-up-display-inc-/",
    content: () => {
      return (
        <div>
          <h1 className="text-2xl mb-5">Stack</h1>
          <ul>
            <li>&gt; Angular JS</li>
            <li>&gt; Express</li>
            <li>&gt; Cordova</li>
            <li>&gt; Node BLE</li>
          </ul>
          <div className="w-full h-1 bg-indigo-500 my-5"></div>
          <p>
            Heads Up Display is a industrial safety IoT wearable. It connects to workers phones through a mobile application, tracks and aggregates industrial environment data, and provides peripheral alerts and notifications.
          </p>
        </div>
      );
    },
  },
];