import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getAll } from "./BooksAPI";
import SearchBook from "./components/SearchBook";
import Books from "./components/Books";

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

  return (
    <div className="app">
      <Routes>
        <Route path="" element={<Books books={books} getAll={getBooks} />} exact />
        <Route path="/search" element={<SearchBook books={books} getAll={getBooks} />} exact />
      </Routes>
    </div>
  );
}

export default App;
