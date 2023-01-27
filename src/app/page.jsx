import { Playfair_Display } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "@/app/navbar";
import Bookshelf from "@/pages/bookshelf";

const playfairDisplay = Playfair_Display({ weight: "900", subsets: ["latin"] });

function Home() {
    return (
        <>
            <h1 className={`${playfairDisplay.className} text-big`}>
                THE COLLECTION
            </h1>
            <Bookshelf />
        </>
    );
}

export default function WithLayout(page) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <Home />
            </main>
        </>
    );
}
