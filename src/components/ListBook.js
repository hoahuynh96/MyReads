import { PropTypes } from "prop-types";
import BookDetail from "./BookDetail";

const ListBooks = ({ books, updateBook }) => {
    return (
        <ol className="books-grid">
            {books?.length > 0 && books.map(book => (
                <li key={book.id}>
                    <BookDetail book={book} handleChangeShelf={updateBook} />
                </li>
            ))}
        </ol>
    );
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default ListBooks;

