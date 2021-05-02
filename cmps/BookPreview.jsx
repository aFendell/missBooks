export function BookPreview({ book, setSelectedBook }) {
    return (
            <article className="book-preview" onClick={() => setSelectedBook(book)}>
                <img src={book.thumbnail} alt="" />
                <div className="preview-details">
                    <h4>{book.title}</h4>
                    <p>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</p>
                </div>
            </article>
    )
}