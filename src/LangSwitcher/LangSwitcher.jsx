import css from './LangSwitcher.module.css';
import { useId } from 'react';

export function LangSwitcher({ value, onSelect }) {
  const selectId = useId();

  const handleSelect = event => {
    onSelect(event.target.value);
  };

  return (
    <div className={css.selectCont}>
      <label htmlFor={selectId}>Choose Language</label>
      <select id={selectId} className={css.select} value={value} onChange={handleSelect}>
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}
