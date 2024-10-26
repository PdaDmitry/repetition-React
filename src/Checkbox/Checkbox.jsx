import css from './Checkbox.module.css';
export function Checkbox({ value, onShow }) {
  return (
    <>
      <h3>Checkboxes</h3>
      <div className={css.contCheck}>
        <label className={css.label}>
          <input type="checkbox" name="terms" checked={value} onChange={onShow} />I accept terms and
          conditions
        </label>
        <button type="button" className={css.chackBtn} disabled={!value}>
          Proceed
        </button>
      </div>
    </>
  );
}
