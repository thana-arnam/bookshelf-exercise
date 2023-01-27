import {Playfair_Display} from "@next/font/google";

const playfairDisplaySemiBold = Playfair_Display({weight: "600", subsets: ['latin']})

export default function BookDetail({title, finished}) {
    return (
        <>
            <div className="bookDetail">
                <div className="left">
                    <img className="img" src="https://via.placeholder.com/269x355" alt="book cover"/>
                    <span className="category">💻 Computer</span>
                </div>

                <div className="right">
                    <p className={playfairDisplaySemiBold.className + " bookName"}>{title}</p>
                    <p className="description">
                        Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.
                        Noted software expert Robert C. Martin, presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin, who has helped bring agile principles from a practitioner’s point of view to tens of thousands of programmers, has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of software craftsman, and make you a better programmer―but only if you work at it.
                    </p>

                    <a className="readBtn" href="#">I have read it</a>
                </div>

            </div>
        </>
    )
}
