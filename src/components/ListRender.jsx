
const ListRender = () => {
    const books = ["Domain-Driven Design", "Clean Code"]
    return (
        <ul>
            {books.map((book) => (
                <li key={book}>{book}</li>
            ))}
        </ul>
    )
}

export default ListRender
