import css from './Product.module.css';

export function Product({ name, img, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} className={css.img} />
      <p>Price: {price} credit!</p>
    </div>
  );
}
