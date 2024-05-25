import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBookModal from "./components/AddBookModal";
import FilterSort from "./components/FilterSort";
import styles from "./styles/App.module.css";
import UserList from "./components/UserList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [genreFilter, setGenreFilter] = useState("");

  useEffect(() => {
    const initialBooks = [
      { id: 1, title: "Шерлок Холмс", author: "Артур Конан Дойл", genre: "Детектив" },
      { id: 2, title: "Дюна", author: "Френк Герберт", genre: "Наукова фантастика" },
      { id: 3, title: "Лев, чарівниця та плаття Шапокляк", author: "Анджей Сапковський", genre: "Фентезі" },
      { id: 4, title: "Після смерті", author: "Харукі Муракамі", genre: "Роман" },
      { id: 5, title: "Агенти", author: "Сергій Лук'яненко", genre: "Наукова фантастика" },
      { id: 6, title: "Код да Вінчі", author: "Ден Браун", genre: "Детектив" },
      { id: 7, title: "Володар перстнів", author: "Толкін", genre: "Фентезі" },
      { id: 8, title: "Гаррі Поттер", author: "Дж. Роулінг", genre: "Фентезі" },
    ];
    setBooks(initialBooks);
  }, []);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(filter.toLowerCase())
    )
    .filter((book) =>
      genreFilter ? book.genre === genreFilter : true
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className={styles.app}>
      <h1>Бібліотека</h1>
      <button onClick={() => setIsModalOpen(true)}>Додати книгу</button>
      <FilterSort
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        genreFilter={genreFilter}
        setGenreFilter={setGenreFilter}
      />
      <BookList books={filteredBooks} deleteBook={deleteBook} />
      {isModalOpen && (
        <AddBookModal
          addBook={addBook}
          onClose={() => setIsModalOpen(false)}
          open={isModalOpen}
        />
      )}
      <UserList />
    </div>
  );
};
export default App;
