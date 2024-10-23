// import { useState } from "react";

// import { Bird } from "../Bird/Bird";
// import { Logo } from "../Logo/Logo";
import { IoMdMenu } from 'react-icons/io';
import { Card } from '../Card/Card';
import { Product } from '../Product/Product';

import css from './App.module.css';

function App() {
  const tacos = 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&w=140';
  const burger = 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&w=123';

  return (
    <>
      <h1 className={css.title}>Best selling</h1>
      <div className={css.cont}>
        <Product name="Tacos With Lime" img={tacos} price="100" />
        <Product name="Fries and Burger" img={burger} price="120" />
      </div>
      <Card>
        <h2 className={css.titleSecond}>
          <IoMdMenu className={css.icon} />
          Card title!
        </h2>
        <p>Text between opening and closing tag</p>
      </Card>
    </>
  );
}

export default App;
