// import { useState } from 'react';

export function SearchBar({ value, onChange }) {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <p>Input value: {value}</p>
    </div>
  );
}
