import {Playfair_Display} from "@next/font/google";

const playfairDisplaySemiBold = Playfair_Display({weight: "600", subsets: ['latin']})

export default function Book({title, finished}) {
    return (
        <>
            <div className="book">
                <img src="https://via.placeholder.com/269x355" alt="book cover"/>
                <p className={playfairDisplaySemiBold.className + " bookName"}>{title}</p>
                {finished? <span className="readingStatus">Finish</span>: null}
            </div>
        </>
    )
}
