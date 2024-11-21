'use client'

import {useState} from "react";

interface TypeWritterProps {
    content: string[]
}

const TypeWritter = ({content} : TypeWritterProps) => {
    const [index, setIndex] = useState<number>(0);
    const [text, setText] = useState('');

    const type = () => {
        if(index < content.length) {
            const currentText = content[index];
            setText(currentText);
            setIndex(index + 1);
        } else {
            setIndex(0);
            setText('')
        }
    }

    setTimeout(type, 5 * 1000)

    return (
        <>
            <span className="relative w-[max-content] font-mono
before:absolute before:inset-0 before:bg-white
before:animate-typewriter">{text}</span>
        </>
    )
}
export default TypeWritter
