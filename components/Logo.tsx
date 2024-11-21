import React from 'react'
import {Profile} from "@data/AppConstent";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface LogoProps {
    className?: string
}

const Logo = ({className} : LogoProps) => {
    return (
        <>
            <Link href="/" className={cn('hover:text-amber-500 text-lg font-semibold', className)}>
                <span className={'hidden text-2xl md:block lg:block md:text-xl'}>{"<"} <span
                    className={'uppercase'}>{Profile.name}</span>{"/>"}</span>
                <span className={'block md:hidden lg:hidden'}>{"< PS />"}</span>
            </Link>

        </>
    )
}
export default Logo
