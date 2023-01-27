"use client";
import Bookshelf from "@/pages/bookshelf";
import TypingAnimation from "@/components/TypingAnimation";

const title = `THE
COLLECTION`;

export default function Home() {
    return (
        <>
            <div className="header">
                {/* <TypingAnimation fullText={title} speed={100} /> */}
                <h1 className="type-animation text-title text-big">
                    THE <br />
                    COLLECTION
                </h1>
            </div>
            <p>This is body</p>
            <Bookshelf />
        </>
    );
}
