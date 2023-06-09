import { PropTypes } from "prop-types";

const BookDetail = ({ book, handleChangeShelf }) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url(${book?.imageLinks?.thumbnail || ''})`
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select
                        id={book.id}
                        value={book.shelf}
                        onChange={(e) => {
                            handleChangeShelf(book, e.target.value);
                        }}
                    >
                        <option disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book?.authors?.join(' & ') || ""}</div>
        </div>
    );
}

BookDetail.propTypes = {
    book: PropTypes.object.isRequired,
    handleChangeShelf: PropTypes.func.isRequired
}


export default BookDetail;