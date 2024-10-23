import css from './Button.module.css';

// export function Button({ name }) {
//   const handleClick = name => {
//     alert(`My name is ${name}, I am a student!!!`);
//   };

//   return (
//     <button className={css.btn} type="button" onClick={() => handleClick(name)}>
//       Click me!
//     </button>
//   );
// }

export function Button({ onClick, children }) {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
}
