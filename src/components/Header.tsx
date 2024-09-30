"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tabs = {
    "Home": "/",
    "Evenementen": "/evenementen",
    "Aanmelden": "/aanmelden",
    "Inloggen": "/inloggen",
} satisfies Record<string, string>;

export default function Header() {
    const pathName = usePathname();
    const [ navEnabled, setNavEnabled ] = useState(false);

    return (
        <header className="mx-8 my-4 pb-2 flex items-center justify-between border-b-2 border-gray-300">
            <Image src="/logo.svg" alt="logo" width="67" height="62" priority/>
            {navEnabled && <nav className="flex gap-4 font-kinetika">
                {Object.entries(tabs).map(([ name, url ], index) =>
                    <Link className={`transition-colors border-b-2 ${url === pathName ? "border-accent text-black" : "border-transparent text-gray-500 hover:text-black"} p-2 uppercase`} href={url} key={index}>{name}</Link>
                )}
            </nav>}
            <button className="w-12 h-10 relative" onClick={() => setNavEnabled(!navEnabled)}>
                <div className={`transition-all duration-300 w-full h-1 bg-black absolute ${navEnabled ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></div>
                <div className={`transition-all duration-300 w-full h-1 bg-black absolute top-1/2 -translate-y-1/2 ${navEnabled ? 'opacity-0' : ''}`}></div>
                <div className={`transition-all duration-300 w-full h-1 bg-black absolute ${navEnabled ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-full -translate-y-full'}`}></div>
            </button>
        </header>
    );
}