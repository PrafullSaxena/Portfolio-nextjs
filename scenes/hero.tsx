import React from 'react'
import { Profile} from "@data/AppConstent";
import ShowHowLongAgo from "@components/ShowHowLongAgo";
import HighLightText from "@components/HighLightText";
import {MaxWidthWrapper} from "@components/MaxWidthWrapper";
import {Highlight} from "@components/ui/hero-highlight";
import HeroActionButtons from "@components/HeroActionButtons";
import {ShootingStars} from "@components/ui/shooting-stars";
import {StarsBackground} from "@components/ui/stars-background";

const Hero = () => {

    return (
        <>
                <MaxWidthWrapper className={"scroll-mt-20"}>
                    <div className="flex justify-between items-center h-full mt-16">

                        <div className={'flex-1 mt-6'}>
                            <div className="text-6xl font-bold text-center">
                                <h1 className="text-6xl font-bold text-center">
                                    {"Hi, I'm"} <HighLightText text={Profile.name}/>
                                </h1>
                                <p className="text-2xl text-center mt-9">
                                    {Profile.role}
                                </p>
                            </div>
                            <div className="text-2xl text-center mt-4 font-light">
                                <div>
                                    {"I'm a "}
                                    <Highlight>
                                        {Profile.title}
                                    </Highlight>
                                    {" "} based in <HighLightText
                                    text={Profile.location}/> and
                                    <br/>I have been professionally coding for
                                    <ShowHowLongAgo date={Profile.workingSince}/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <HeroActionButtons />

                </MaxWidthWrapper>
                <ShootingStars className='-z-10'/>
                <StarsBackground className='-z-10'/>
        </>
    )
}
export default Hero
