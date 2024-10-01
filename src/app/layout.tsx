import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>SV Unity</title>
                <meta name="author" content="Mick Negenman"/>
                <meta name="keywords" content="MBO, Student, Studenten, Vereniging, SVUnity, Unity"/>
                <meta name="description" content="De eerste MBO studenten vereniging van Nederland"/>
                <meta property="og:title" content="SV Unity"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://sv-unity.spoorloos.xyz"/>
                <meta property="og:description" content="De eerste studenten vereniging van Nederland!"/>
                <link rel="icon" type="image/x-icon" href="/logo/logo.ico"/>
                <link rel="icon" type="image/svg+xml" href="/logo/logo.svg"/>
                <link rel="apple-touch-icon" href="/logo/logo.png"/>
            </head>
            <body className="antialiased font-sans bg-background text-text">
                <div className="min-h-screen flex flex-col">
                    <Header/>
                    <main className="px-8 py-4 flex-1">
                        {children}
                    </main>
                </div>
                <Footer/>
            </body>
        </html>
    );
}
