import Book from "@/components/book";

export default function Bookshelf() {

    const books = [
        {
            "id": 1,
            "title": "Domain-Driven Design: Tackling Complexity in the Heart of Software",
            "desc": "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
            "owner": "bazsup",
            "category": "Computer",
            "finished": false
        },
        {
            "id": 1,
            "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
            "desc": "Eric Evans has written a fantastic book on how you can make the design of your software match your mental model of the problem domain you are addressing.",
            "owner": "thoritie",
            "category": "Novel",
            "finished": true
        }
    ];

    return (
        <>
            <div className="bookList">
                {books.map(book => {
                    return <Book title={book.title} finished={book.finished}/>
                })}
            </div>
        </>
    )
}
