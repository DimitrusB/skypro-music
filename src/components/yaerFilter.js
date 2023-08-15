import { useState } from 'react';

export function YearFilter() {
  const [to, setTo] = useState('');

  return (
    <div className="filter__button button-year _btn-text">
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="filter__choose"
      >
        <option hidden disabled value="">
          Год выпуска
        </option>
        <option className="filter__option" value="all">Все</option>
        <option className="filter__option" value="2001">2001</option>
        <option className="filter__option" value="1995">1995</option>
        <option className="filter__option" value="2000">2000</option>
        <option className="filter__option" value="1999">1999</option>
      </select>
    </div>
  );
}