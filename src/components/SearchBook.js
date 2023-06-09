import { useState } from "react";
import { Link } from "react-router-dom";
import { update } from "../BooksAPI";
import ListBooks from "./ListBook";

const SearchBook = ({ books, getAll }) => {
    const [filterList, setFilterList] = useState({
        query: '',
        list: []
    });
    const filterBySearch = (e) => {
        const results = books.filter((book) => {
            if (e.target.value === '') return books;
            return book.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setFilterList({
            query: e.target.value,
            list: results
        });
    };
    const onUpdate = async (id, e) => {
        const book = books.find((book) => book.id === id);
        if (book) {
            await update(book, e);
            getAll();
        }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={filterList.query}
                        onChange={filterBySearch}
                    />
                </div>
            </div>
            <div className="search-books-results">
                {(filterList.query === ''
                    ? <ListBooks books={books} updateBook={onUpdate} />
                    : <ListBooks books={filterList.list} updateBook={onUpdate} />)}
            </div>
        </div>
    )
}

export default SearchBook;