import { booksService } from "../services/books-service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookDetails } from "../cmps/BookDetails.jsx"


export class BooksApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        selectedBook: null,
        isLongTxtShown: false
    }
    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        booksService.query(this.state.filterBy).then((books) => {
            this.setState({ books }) // books: books
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    setSelectedBook = (book) => {
        this.setState({ selectedBook: book })
    }

    onToggleLongTxt = () => {

        // isLongTxtShown ? this.setState({isLongTxtShown: false})  : this.setState({isLongTxtShown: true})
    }

    render() {
        console.log('render', this.state.books);
        // console.log('books from loadBooks:', books);
        const { books, selectedBook } = this.state
        if (!books) return <div>Loading...</div>
        return (
            <section className="main-container">
                <h2>MissBooks</h2>
                {!selectedBook && <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <BookList books={books} setSelectedBook={this.setSelectedBook} />
                </React.Fragment>}

                {selectedBook && <BookDetails book={selectedBook}
                    goBack={() => this.setSelectedBook(null)} 
                    isLongTxtShown={this.state.isLongTxtShown}
                />}
                
                {/* {selectedBook && <React.Fragment>
                    <BookDetails book={selectedBook} goBack={() => this.setSelectedBook(null)} />
                    {selectedBook.description.length > 100 && <LongTxt txt={selectedBook.description} 
                                isLongTxtShown={this.state.isLongTxtShown} />}
                                </React.Fragment>} */}
                
            </section>
        )
    }
}