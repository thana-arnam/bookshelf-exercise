import "./globals.css";
import { K2D } from "@next/font/google";
import Navbar from "@/app/navbar";
import styles from "@/app/page.module.css";
const k2d = K2D({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
                {/* <Navbar /> */}
                {children}
            </body>
        </html>
    );
}
