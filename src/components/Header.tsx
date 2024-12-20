"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import Logo from "@/app/icon3.svg";
import Hamburger from "@/components/Hamburger";
import NavItem from "@/components/NavItem";

const tabs = {
    "Home": "/",
    "Evenementen": "/evenementen",
    "Contact": "/contact",
    "Inschrijven": "/inschrijven",
} satisfies Record<string, string>;

export default function Header() {
    const pathName = usePathname();
    const [ navEnabled, setNavEnabled ] = useState(false);
    const [ userToggled, setUserToggled ] = useState(false);

    return (
        <header className="z-10 flex items-center justify-between pb-3 border-b-2 border-border">
            <Link href="/" aria-label="Home pagina" scroll={false}>
                <Logo className="w-auto h-16"/>
            </Link>
            <nav className={twMerge(
                "bg-background z-40 fixed sm:static inset-0 space-y-4 sm:space-y-0 sm:space-x-4 p-[10%] pt-24 sm:p-0 origin-top scale-y-0 sm:scale-y-100 opacity-0 sm:opacity-100",
                userToggled && (navEnabled ? "open animate-[open-nav_300ms_both]" : "animate-[close-nav_300ms_both]")
            )}>
                {Object.entries(tabs).map(([ name, url ], index) =>
                    <NavItem
                        key={index}
                        name={name}
                        href={url}
                        selected={url === "/" ? pathName === "/" : pathName.startsWith(url)}
                        onClick={navEnabled ? () => setNavEnabled(false) : undefined}/>
                )}
            </nav>
            <Hamburger toggled={navEnabled} onToggle={() => {
                setUserToggled(true);
                setNavEnabled((x) => !x);
            }}/>
        </header>
    );
}