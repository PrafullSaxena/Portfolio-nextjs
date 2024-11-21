'use client';

import React from "react";
import { cn } from "@/lib/utils";
import {BusinessPage} from "@data/AppConstent";
import HighLightText from "@components/HighLightText";
import Image from "next/image";
import {Globe} from "@components/ui/Globe";
import { motion } from "framer-motion";

export default function ProjectViewer() {

    const features = [
        {
            title: BusinessPage.data[0].title,
            description: BusinessPage.data[0].desc,
            highlights: BusinessPage.data[0].highlight,
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
        },
        {
            title: BusinessPage.data[1].title,
            description: BusinessPage.data[1].desc,
            highlights: BusinessPage.data[1].highlight,
            skeleton: <SkeletonTwo />,
            className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
        },
        {
            title: BusinessPage.data[3].title,
            description: BusinessPage.data[3].desc,
            highlights: BusinessPage.data[3].highlight,
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
        {
            title: BusinessPage.data[2].title,
            description: BusinessPage.data[2].desc,
            highlights: BusinessPage.data[2].highlight,
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 lg:border-l border-b dark:border-neutral-800",
        },
    ];
    return (
        <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto h-full">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                    <HighLightText text={BusinessPage.title} highlights={BusinessPage.Titlehighlights}/>
                </h4>

                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    <HighLightText text={BusinessPage.desc} highlights={BusinessPage.Titlehighlights}/>
                </p>
            </div>

            <div className="relative ">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>
                                <HighLightText
                                    text={feature.description}
                                    highlights={feature.highlights}
                                    disable={feature.highlights.length === 0}
                                />
                            </FeatureDescription>
                            <div className="h-full w-full">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
                         children,
                         className,
                     }: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-500 text-center font-normal dark:text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
                <div className="flex flex-1 w-full max-h-3 flex-col space-y-2  ">
                    {/* TODO */}
                    <Image
                        src="/coding.jpg"
                        alt="header"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-left-top rounded-sm aspect-auto"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonThree = () => {
    return (
        <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
            <div className="flex flex-1 w-full max-h-3 flex-col space-y-2  relative">
                <Image
                    src="/project-dsaT-1.png"
                    alt="header"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center rounded-sm blur-none group-hover:blur-md transition-all duration-200"
                />
            </div>
        </div>
    );
};

export const SkeletonTwo = () => {
    const images = [
        "/project-sortingviz.png",
        "/project-dsaT-3.png",
        "/project-lld.png",
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
        </div>
    );
};


export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    );
};
