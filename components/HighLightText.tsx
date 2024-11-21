import React from 'react'

interface HighLightTextProps {
    text: string,
    disable?: boolean,
    highlights?: string[]
}

const HighLightText = ({
                           text,
                           highlights = [],
                           disable= false
}:HighLightTextProps) => {

    if (disable) {
        return (
            <span>{text}</span>
        )
    }

    const getHighlightedText = (highlights:string[]) => {
        // Escape special characters in highlights for regex
        const escapedHighlights = highlights.map((word) =>
            word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );
        const regex = new RegExp(`(${escapedHighlights.join("|")})`, "gi");

        // Split text and wrap matches
        const parts = text.split(regex);
        return parts.map((part, index) =>
                highlights.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
                    <span key={index} className='text-amber-700 dark:text-amber-500'>
                  {part}
                </span>
                ) : (
                    <span key={index}>{part}</span>
                )
        );
    };

    return (
        <>
            {highlights?.length ? getHighlightedText(highlights) : (
                <span className={'text-amber-700 dark:text-amber-500'}>{text}</span>)}
        </>

    )
}
export default HighLightText
