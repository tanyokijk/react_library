import { useState } from 'react'


const FilterSort = ({ filter, setFilter, sortOrder, setSortOrder, genreFilter, setGenreFilter }) => {
  const genres = ["Фентезі", "Роман", "Детектив", "Наукова фантастика"];

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Пошук за назвою"
      />
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">За зростанням</option>
        <option value="desc">За спаданням</option>
      </select>
      <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
        <option value="">Всі жанри</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSort;
