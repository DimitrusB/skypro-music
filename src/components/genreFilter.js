import { useState } from 'react';

export function GenreFilter() {
  const [to, setTo] = useState('');

  return (
    <div className="filter__button button-genre _btn-text">
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="filter__choose"
      >
        <option hidden disabled value="">
            Жанру
        </option>
        <option className="filter__option" value="all">Все</option>
        <option className="filter__option" value="Shanson">Шансон</option>
        <option className="filter__option" value="HH">Хип-Хоп</option>
        <option className="filter__option" value="Jazz">Джаэ</option>
        <option className="filter__option" value="Reggy">Регги</option>
      </select>
    </div>
  );
}