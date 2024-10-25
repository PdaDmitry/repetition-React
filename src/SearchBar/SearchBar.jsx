import { useState } from 'react';

export function SearchBar() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input value: {inputValue}</p>
    </div>
  );
}
