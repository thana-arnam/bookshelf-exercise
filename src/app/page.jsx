import { Playfair_Display } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "@/app/navbar";
import Bookshelf from "@/pages/bookshelf";

const playfairDisplay = Playfair_Display({ weight: "900", subsets: ["latin"] });

function Home() {
    return (
        <>
            <div className="flex bookshelf-header">
                <h1 className={`${playfairDisplay.className} text-big`}>
                    THE
                    <br />
                    COLLECTION
                </h1>
                <h2 className="bookshelf-owner">
                    by
                    <br />
                    bazsup
                </h2>
            </div>
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
