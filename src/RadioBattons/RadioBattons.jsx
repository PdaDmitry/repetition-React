import css from './RadioBattons.module.css';

export function RadioBattons({ value, onChange }) {
  return (
    <>
      <h3>Selected coffee size</h3>
      <label className={css.radioBtn}>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={value === 'sm'}
          onChange={onChange}
        />
        Small
      </label>
      <label className={css.radioBtn}>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={value === 'md'}
          onChange={onChange}
        />
        Meduim
      </label>
      <label className={css.radioBtn}>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={value === 'lg'}
          onChange={onChange}
        />
        Large
      </label>
    </>
  );
}
