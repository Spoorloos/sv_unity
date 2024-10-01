"use client";

import logo from "@/public/logo/logo.svg";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tabs = {
    "Home": "/",
    "Evenementen": "/events",
    "Aanmelden": "/signup",
    "Inloggen": "/login",
} satisfies Record<string, string>;

const kinetika = localFont({
    src: "../../public/fonts/kinetika-semi-bold.ttf"
});

export default function Header() {
    const pathName = usePathname();
    const [navEnabled, setNavEnabled] = useState(false);
    const [animate, setAnimate] = useState(false);

    function toggleNavBar(state = !navEnabled) {
        setNavEnabled(state);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
        document.body.classList.toggle("overflow-hidden", state);
    }

    return (
        <header className="mx-8 mt-4 pb-2 flex items-center justify-between border-b-2 border-border">
            <Link href="/">
                <Image className="h-16 w-auto" src={logo} alt="logo"/>
            </Link>
            <nav className={`origin-top fixed sm:static inset-0 bg-background flex flex-col sm:flex-row text-3xl gap-4 p-[10%] pt-24 sm:p-0 sm:text-base sm:transform-none ${kinetika.className} ${animate ? "transition-transform duration-300" : ""} ${navEnabled ? "scale-y-100" : "scale-y-0"}`}>
                {Object.entries(tabs).map(([name, url], index) =>
                    <Link
                        className={`transition-opacity uppercase ${url !== pathName ? "opacity-50 hocus:opacity-100" : ""}`}
                        href={url}
                        key={index}
                        onClick={() => toggleNavBar(false)}
                    >
                        <span className={`transition-colors p-2 inline-block border-b-2 ${url === pathName ? "border-accent" : "border-transparent"}`}>{name}</span>
                    </Link>
                )}
            </nav>
            <button className="w-10 h-8 relative sm:hidden z-10" onClick={() => toggleNavBar()}>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute top-1/2 -translate-y-1/2 ${navEnabled ? "opacity-0" : ""}`}></div>
                <div className={`transition-all duration-300 w-full h-1 rounded bg-current absolute ${navEnabled ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-full"}`}></div>
            </button>
        </header>
    );
}