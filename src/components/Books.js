import { Link } from "react-router-dom";
import { update } from "../BooksAPI";
import CurrentRead from "./ShelfBooks/CurrentRead";
import Read from "./ShelfBooks/Read";
import WantToRead from "./ShelfBooks/WantToRead";

const Books = ({ books, getAll }) => {
    const onUpdate = async (id, e) => {
        const book = books.find((book) => book.id === id);
        if (book) {
            await update(book, e);
            getAll();
        }
    }
    
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <CurrentRead books={books} updateBook={onUpdate} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <WantToRead books={books} updateBook={onUpdate} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <Read books={books} updateBook={onUpdate} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

export default Books;