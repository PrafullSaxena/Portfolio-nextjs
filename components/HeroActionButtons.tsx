'use client';
import React from 'react'
import {AppConstent, Profile} from "@data/AppConstent";
import { toast, Toaster } from "sonner";
import {CopyIcon} from "lucide-react";

const HeroActionButtons = () => {

    function downloadResume() {
        // copyToClipboard("downloading resume")
        window.open(AppConstent.RESUME_URL, "_blank")

    }

    const copyMyEmail = () => {
        copyToClipboard(Profile.email)
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                // console.log("Text copied to clipboard:", text);
                toast.success("copied to clipboard  🎊");
            })
            .catch((err) => {
                console.error("Error copying text to clipboard:", err);
                toast.error("Error copying to clipboard");
            });
    };

    return (
        <div className='flex flex-col md:flex-row lg:flex-row mx-auto mt-8 lg:mt-11 justify-center gap-3 items-center sm:flex-col'>
            <Toaster position="top-center" />
            {/*First Button*/}
            <div>
                <button className="p-[3px] relative" onClick={downloadResume}>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg"/>
                    <div
                        className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent hover:text-black">
                        Download my resume
                    </div>
                </button>
            </div>

            {/*Second button*/}
            <div>
                <button
                    className="px-4 py-2 rounded-md border border-black bg-amber-50 dark:bg-amber-100 text-black text-sm
                    hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200"
                    onClick={copyMyEmail}
                >
                    <span className="flex items-center justify-center space-x-2 gap-2">
                        <span>Copy my email</span>
                        <CopyIcon/>
                     </span>
                </button>
            </div>
        </div>
    )
}
export default HeroActionButtons
