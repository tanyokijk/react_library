import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, deleteBook }) => (
  <div>
    {books.map((book) => (
      <BookItem key={book.id} book={book} deleteBook={deleteBook} />
    ))}
  </div>
);

export default BookList;
