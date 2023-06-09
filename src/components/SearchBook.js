import { PropTypes } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import ListBooks from "./ListBook";

const SearchBook = ({ onUpdate, books }) => {
    const [filterList, setFilterList] = useState({
        query: '',
        list: []
    });

    const filterBySearch = async (e) => {
        setFilterList((prevState) => ({
            ...prevState,
            query: e.target.value,
        }));
        await search(e.target.value).then(res => {
            let listSearchedBooks = Array.isArray(res) ? res : res?.items || [];
            listSearchedBooks = listSearchedBooks.map(searchedBook => {
                const bookFound = books.find(b => b.id === searchedBook.id)
                if (bookFound) return {
                    ...searchedBook,
                    shelf: bookFound.shelf
                }
                return {
                    ...searchedBook,
                    shelf: 'none'
                }
            })
            setFilterList((prevState) => ({
                ...prevState,
                list: listSearchedBooks
            }));
        });
    };

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
                {(<ListBooks books={filterList.list} updateBook={onUpdate} />)}
            </div>
        </div>
    )
}

SearchBook.propTypes = {
    onUpdate: PropTypes.func.isRequired
}

export default SearchBook;