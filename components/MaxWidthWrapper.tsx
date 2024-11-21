import { cn } from "@/Utils"
import { ReactNode } from "react"

interface MaxWidthWrapperProps {
    className?: string
    children: ReactNode
}

export const MaxWidthWrapper = ({
                                    className,
                                    children,
                                }: MaxWidthWrapperProps) => {
    return (
        <div
            className={cn(
                "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-4 lg:px-6",
                className
            )}
        >
            {children}
        </div>
    )
}