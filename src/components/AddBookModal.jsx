import React, { useState, useEffect } from "react";
import ModalPortal from "./ModalPortal";
import styles from "../styles/AddBookModal.module.css";

const AddBookModal = ({ addBook, onClose, open }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const latinSlug = transliterate(title, {
      replace: {
        ' ': '-',
        '/[^A-Za-z0-9\-]/g': '',
      },
      lowercase: true,
    });
    setSlug(latinSlug);
  }, [title]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({ title, author,genre, slug });
      onClose();
    }
  };

  return (
    <ModalPortal open={open}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>Додати нову книгу</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.row_in_modal}>
              <label>Назва </label>
              <input
                className={styles.input_in_modal}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className={styles.row_in_modal}>
              <label>Автор </label>
              <input
                className={styles.input_in_modal}
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div className={styles.row_in_modal}>
              <label>Жанр</label>
              <select
                className={styles.input_in_modal}
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
              >
              <option value="">Оберіть категорію</option>
              <option value="Фентезі">Фентезі</option>
              <option value="Детектив">Детектив</option>
              <option value="Роман">Роман</option>
              <option value="Наукова фантастика">Наукова фантастика</option>
              </select>
            </div>

            <div className={styles.row_in_modal}>
              <label>Slug </label>
              <input
                className={styles.input_in_modal}
                type="text"
                value={slug}
                readOnly
              />
            </div>
            <div className={styles.row_in_modal}>
              <button type="submit">Додати</button>
              <button type="button" onClick={onClose}>
                Закрити
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
};
function transliterate(str) {
  return str
    .replace(/а/g, "a")
    .replace(/б/g, "b")
    .replace(/в/g, "v")
    .replace(/г/g, "h")
    .replace(/ґ/g, "g")
    .replace(/д/g, "d")
    .replace(/е/g, "e")
    .replace(/є/g, "ie")
    .replace(/ж/g, "zh")
    .replace(/з/g, "z")
    .replace(/и/g, "y")
    .replace(/і/g, "i")
    .replace(/ї/g, "i")
    .replace(/й/g, "i")
    .replace(/к/g, "k")
    .replace(/л/g, "l")
    .replace(/м/g, "m")
    .replace(/н/g, "n")
    .replace(/о/g, "o")
    .replace(/п/g, "p")
    .replace(/р/g, "r")
    .replace(/с/g, "s")
    .replace(/т/g, "t")
    .replace(/у/g, "u")
    .replace(/ф/g, "f")
    .replace(/х/g, "kh")
    .replace(/ц/g, "ts")
    .replace(/ч/g, "ch")
    .replace(/ш/g, "sh")
    .replace(/щ/g, "shch")
    .replace(/ь/g, "")
    .replace(/ю/g, "iu")
    .replace(/я/g, "ia")
    .replace(/А/g, "A")
    .replace(/Б/g, "B")
    .replace(/В/g, "V")
    .replace(/Г/g, "H")
    .replace(/Ґ/g, "G")
    .replace(/Д/g, "D")
    .replace(/Е/g, "E")
    .replace(/Є/g, "IE")
    .replace(/Ж/g, "ZH")
    .replace(/З/g, "Z")
    .replace(/И/g, "Y")
    .replace(/І/g, "I")
    .replace(/Ї/g, "I")
    .replace(/Й/g, "I")
    .replace(/К/g, "K")
    .replace(/Л/g, "L")
    .replace(/М/g, "M")
    .replace(/Н/g, "N")
    .replace(/О/g, "O")
    .replace(/П/g, "P")
    .replace(/Р/g, "R")
    .replace(/С/g, "S")
    .replace(/Т/g, "T")
    .replace(/У/g, "U")
    .replace(/Ф/g, "F")
    .replace(/Х/g, "KH")
    .replace(/Ц/g, "TS")
    .replace(/Ч/g, "CH")
    .replace(/Ш/g, "SH")
    .replace(/Щ/g, "SHCH")
    .replace(/Ь/g, "")
    .replace(/Ю/g, "IU")
    .replace(/Я/g, "IA");
}

export default AddBookModal;
