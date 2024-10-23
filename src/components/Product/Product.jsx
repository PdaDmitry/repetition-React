export function Product({ name, img, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>Price: {price} credit!</p>
    </div>
  );
}
