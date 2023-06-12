import { PropTypes } from "prop-types";
import BookDetail from "../BookDetail";

const WantToRead = ({ books, updateBook }) => {
    const updateBookDetail = (book, e) => {
        updateBook(book, e.target.value);
    }

    return (
        <BookDetail books={books.filter((b) => b.shelf === "wantToRead")} handleChangeShelf={updateBookDetail} />
    );
}

WantToRead.propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default WantToRead;