import { Playfair_Display } from "@next/font/google";
import Image from "next/image";

const playfairDisplaySemiBold = Playfair_Display({
    weight: "600",
    subsets: ["latin"],
});

export default function Book({ title, coverImg, finished, addNewBook }) {
    return (
        <>
            <div className="book" onClick={addNewBook}>
                <Image
                    src={coverImg}
                    alt="book cover"
                    width={260}
                    height={355}
                />
                <p className={playfairDisplaySemiBold.className + " bookName"}>
                    {title}
                </p>
                {finished ? (
                    <span className="readingStatus">Finish</span>
                ) : null}
            </div>
        </>
    );
}
