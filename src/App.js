import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import Books from "./components/Books";
import SearchBook from "./components/SearchBook";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
  }, []);

  const getBooks = () => {
    getAll().then((data) => {
      setBooks(data);
    })
  }

  const updateShelfBook = async (book, shelf) => {
    book.shelf = shelf;
    await update(book, shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
  }

  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Books books={books} onUpdate={updateShelfBook} />} exact />
        <Route path="/search" element={<SearchBook books={books} onUpdate={updateShelfBook} />} exact />
      </Routes>
    </div>
  );
}

export default App;
