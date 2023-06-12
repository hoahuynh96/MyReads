import { PropTypes } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import ListBooks from "./ListBook";

const SearchBook = ({ onUpdate }) => {
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
            setFilterList((prevState) => ({
                ...prevState,
                list: Array.isArray(res) ? res : res?.items || []
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