import { useState } from 'react';

export function TrackFilter() {
  const [to, setTo] = useState('');

  return (
    <div className="filter__button button-year _btn-text">
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="filter__choose"
      >
        <option hidden disabled value="">
        Исполнителю
        </option>
        <option className="filter__option" value="all">Все</option>
        <option className="filter__option" value="Nero">Nero</option>
        <option className="filter__option" value="Dynoro, Outwork, Mr. Gee">Dynoro, Outwork, Mr. Gee</option>
        <option className="filter__option" value="Ali Bakgor">Ali Bakgor</option>
        <option className="filter__option" value="Стоункат, Psychopath">Стоункат, Psychopath</option>
        <option className="filter__option" value="Jaded, Will Clarke, AR/CO, Psychopath">Jaded, Will Clarke, AR/CO</option>
        <option className="filter__option" value="Blue Foundation, Zeds Dead">Blue Foundation, Zeds Deadh</option>
        <option className="filter__option" value="Dynoro, Outwork, Mr. Gee">Dynoro, Outwork, Mr. Gee</option>
      </select>
    </div>
  );
}