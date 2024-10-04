"use client";

import Logo from "@/components/Logo";
import Hamburger from "@/components/Hamburger";
import NavItem from "@/components/NavItem";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Header = Readonly<{
    tabs: Record<string, string>;
}>;

export default function Header({ tabs }: Header) {
    const pathName = usePathname();
    const [navEnabled, setNavEnabled] = useState(false);
    const [animate, setAnimate] = useState(false);

    const toggleNavBar = (state?: boolean) => {
        setAnimate(true);
        setNavEnabled(prev => state ?? !prev);
        setTimeout(() => setAnimate(false), 300);
    }

    return (
        <header className="mx-8 py-3 flex items-center justify-between border-b-2 border-border">
            <Link href="/">
                <Logo className="h-16 w-auto text-[#313131] dark:text-[#D1D5DB]"/>
            </Link>
            <nav className={`origin-top fixed sm:static inset-0 bg-background flex flex-col sm:flex-row gap-4 p-[10%] pt-24 sm:p-0 ${animate ? "transition-all duration-300" : ""} ${navEnabled ? "scale-y-100 opacity-100 open" : "scale-y-0 sm:transform-none opacity-0 sm:opacity-100"}`}>
                {Object.entries(tabs).map(([name, url], index) =>
                    <NavItem
                        name={name}
                        href={url}
                        key={index}
                        selected={url === pathName}
                        onClick={() => void (navEnabled && toggleNavBar(false))}
                        style={{ animationDelay: index * 0.1 + "s" }}/>
                )}
            </nav>
            <Hamburger toggled={navEnabled} onToggle={() => toggleNavBar()}/>
        </header>
    );
}