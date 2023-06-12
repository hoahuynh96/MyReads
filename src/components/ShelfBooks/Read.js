import { PropTypes } from "prop-types";
import BookDetail from "../BookDetail";

const Read = ({ books, updateBook }) => {
    const updateBookDetail = (book, e) => {
        updateBook(book, e.target.value);
    }

    return (
        <BookDetail books={books.filter((b) => b.shelf === "read")} handleChangeShelf={updateBookDetail} />
    );
}

Read.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default Read;