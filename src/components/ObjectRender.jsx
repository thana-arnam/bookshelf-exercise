const ObjectRender = () => {
    const book = {
        title: "Clean Code",
        price: 44
    }
    return (
        <div>
            <h1>Title: {book.title}</h1>
            <p>${book.price}</p>
        </div>
    )
}

export default ObjectRender
