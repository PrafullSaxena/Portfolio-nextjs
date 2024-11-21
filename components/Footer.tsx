import React from "react";
import {Profile} from "@data/AppConstent";
import Logo from "@components/Logo";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-background text-foreground py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Logo or Name */}
                <div className="text-lg font-semibold mb-4 md:mb-0">
                    <Logo />
                </div>

                <div className="flex space-x-6 mb-4 md:mb-0">

                    {Profile.socials.map((social, index) => (
                        social.showInFotter && <Link
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-500"
                        >
                            {social.name}
                        </Link>
                    ))}
                    <Link
                        href={"mailto:"+Profile.email}
                        className="hover:text-amber-500"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;