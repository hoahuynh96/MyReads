import BookDetail from "./BookDetail";

const BookShelf = ({ books, onUpdate }) => {
    const shelves = [
        { id: "1", shelfName: "currentlyReading", shelfDisplayName: "Currently Reading" },
        { id: "2", shelfName: "wantToRead", shelfDisplayName: "Want To Read" },
        { id: "3", shelfName: "read", shelfDisplayName: "Read" }
    ];

    return (
        <div className="bookshelf">
            {shelves?.length > 0 && shelves.map((s) => (
                <div key={s.id}>
                    <h2 className="bookshelf-title">{s.shelfDisplayName}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books?.length > 0 && books
                                .filter((f) => f.shelf === s.shelfName)
                                .map((book) => (
                                    <li key={book.id}>
                                        <BookDetail book={book} handleChangeShelf={onUpdate} />
                                    </li>
                                ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default BookShelf;