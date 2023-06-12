import { PropTypes } from "prop-types";
import BookDetail from "../BookDetail";

const CurrentRead = ({ books, updateBook }) => {
    const updateBookDetail = (book, e) => {
        updateBook(book, e.target.value);
    }

    return (
        <BookDetail books={books.filter((b) => b.shelf === "currentlyReading")} handleChangeShelf={updateBookDetail} />
    );
}

CurrentRead.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default CurrentRead;