import { useId } from 'react';
import css from './LoginForm.module.css';

export function LoginForm({ onLogin }) {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { login, password } = form.elements;
    // console.log(login, password);
    onLogin({
      login: login.value,
      password: password.value,
    });
    form.reset();
  };

  return (
    <form className={css.formCont} onSubmit={handleSubmit}>
      <p>Please login to your account!</p>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} className={css.input} />
      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} className={css.input} />
      <button type="submit" className={css.formBtn}>
        Log in
      </button>
    </form>
  );
}
