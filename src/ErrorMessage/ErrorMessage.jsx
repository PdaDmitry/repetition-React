import css from './ErrorMessage.module.css';

export function ErrorMessage() {
  return (
    <p className={css.text}>
      Whoops, something went wrong! &#128533; Please try reloading this page!
    </p>
  );
}
