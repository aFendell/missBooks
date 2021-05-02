import {LongTxt} from "./LongTxt.jsx"


export function BookDetails({ book, goBack, isLongTxtShown}) {
    console.log('book details');
    
    function getReadingLengthCategory(pageCount) {
        if (pageCount > 500) return <p>Reading length: Long reading</p> 
        if (pageCount > 200) return  <p>Reading length: Decent reading</p>
        if (pageCount < 100) return <p>Reading length: Light reading</p>
    }

    function getPablishDateCategory(publishedDate) {
        const bookAge = new Date().getFullYear() - publishedDate
        if (bookAge > 10) return <p>Veteran Book</p>
        if (bookAge < 1) return <p>NEW!!!</p>
    }
    
    function getBookPrice(book) {
        const price = book.listPrice.amount
        const currency = book.listPrice.currencyCode
        if (price > 150) return <span className="red">{price} {currency}</span>
        if (price < 20) return <span className="green">{price} {currency}</span>
        else return <span>{price} {currency}</span>
    }
    
    function isBookOnSale(isOnSale) {
        if (isOnSale) return <p>SALE!!!</p>
    }
    
    return (
        <div className="book-details">
            <img src={book.thumbnail} alt="" />
            <div className="full-details">
                <h4>{book.title}</h4>
                <h2>{book.subtitle}</h2>
                <p>Author(s): {book.authors[0]}</p>
                <p>Publication date: {book.publishedDate}</p>
                {getPablishDateCategory(book.publishedDate)}

                {/* {book.description.length > 100 && <LongTxt txt={book.description} isLongTxtShown={isLongTxtShown} />}
                {book.description.length <= 100 && <p>{book.description}</p>} */}
                <p>{book.description}</p>
                
                <p>Print length: {book.pageCount} pages</p>
                {getReadingLengthCategory(book.pageCount)}
                <p>Category(s): {book.categories[0]}</p>
                <p>Language: {book.language}</p>
                <p>price: {getBookPrice(book)}</p>
                {isBookOnSale(book.listPrice.isOnSale)}
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    )
}








// function isDescriptionLong(description) {
//     if (description.length > 100) {
//         console.log('description is', description.length , 'long');

//     }
// }

// function onShowLongDesc() {

// }

