import { PropTypes } from "prop-types";
import BookDetail from "./BookDetail";

const ListBooks = ({ books, updateBook }) => {
    const updateBookDetail = (book, e) => {
        updateBook(book, e.target.value);
    }

    return (
        <BookDetail books={books} handleChangeShelf={updateBookDetail} />
    );
}

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default ListBooks;

