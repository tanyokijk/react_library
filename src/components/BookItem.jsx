import React from "react";
import styles from "../styles/BookItem.module.css";

const BookItem = ({ book, deleteBook }) => (
  <div className={styles.bookItem}>
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p><b>Жанр:</b> {book.genre}</p>
    </div>
    <button
      className={styles.button_delete}
      onClick={() => deleteBook(book.id)}
    >
      ❌
    </button>
    
  </div>
);


export default BookItem;
