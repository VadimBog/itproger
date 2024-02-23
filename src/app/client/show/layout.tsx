import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style.css";

const poppins = Poppins({ 
    weight: ['400', '700'],
    subsets: ["latin"] 
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <h1>It is from show/layot</h1>
                {children}
                </body>
        </html>
    );
}
