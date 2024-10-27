import { useEffect, useState } from 'react';

// import { Bird } from "../Bird/Bird";
// import { Logo } from "../Logo/Logo";
import { IoMdMenu } from 'react-icons/io';
import { Card } from '../Card/Card';
import { Product } from '../Product/Product';

import css from './App.module.css';
import { Button } from '../Button/Button';
import { LoginForm } from '../../LoginForm/LoginForm';
import { SearchBar } from '../../SearchBar/SearchBar';
import { LangSwitcher } from '../../LangSwitcher/LangSwitcher';
import { RadioBattons } from '../../RadioBattons/RadioBattons';
import { Checkbox } from '../../Checkbox/checkbox';
import { FeedbackForm } from '../../FeedbackForm/FeedbackForm';
import axios from 'axios';
import { ArticleList } from '../../ArticleList/ArticleList';
import { LoaderComponent } from '../../LoaderComponent/LoaderComponent';
import { ErrorMessage } from '../../ErrorMessage/ErrorMessage';

function App() {
  const tacos = 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2';
  const burger = 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2';

  const [currentValue, setCurrentValue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [lang, setLang] = useState('en');
  const [coffeeSize, setCoffeeSize] = useState('sm');
  const [hasAccept, setHasAccept] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        seterror(false);
        const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
        console.log(response.data.hits);
        setArticles(response.data.hits);
      } catch (error) {
        console.log(error);
        seterror(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  const handleAccept = e => {
    setHasAccept(e.target.checked);
  };

  const handleSizeChange = e => {
    setCoffeeSize(e.target.value);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // console.log('You can see me only once!');
    console.log(`Curreent value: ${currentValue}`);

    return () => {
      // console.log('useEffect unmount!');
    };
  }, [currentValue]);

  const onPlus = () => {
    setCurrentValue(currentValue + 1);
  };

  const onMinus = () => {
    setCurrentValue(currentValue - 1);
  };

  const onReset = () => {
    setCurrentValue(0);
  };

  const toggle = () => {
    // if (!isOpen) {
    //   setIsOpen(true);
    // } else {
    //   setIsOpen(false);
    // }
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const handleLogin = data => {
    console.log(data);
  };

  return (
    <>
      <h2>Latest articles</h2>
      {loading && (
        <div className={css.contLoader}>
          <LoaderComponent />
          <p>Loading data, please wait...</p>
        </div>
      )}
      {error && <ErrorMessage />}
      {!error && articles.length > 0 && <ArticleList items={articles} />}
      {/* <FeedbackForm /> */}
      {/* <RadioBattons value={coffeeSize} onChange={handleSizeChange} /> */}
      {/* <p>Selected Language: {lang}</p> */}
      {/* <LangSwitcher value={lang} onSelect={setLang} /> */}
      {/* <Checkbox value={hasAccept} onShow={handleAccept} /> */}
      {/* <h1 className={css.title}>Best selling</h1> */}
      {/* <div className={css.cont}>
        <Product name="Tacos With Lime" img={tacos} price="100" />
        <Product name="Fries and Burger" img={burger} price="120" />
      </div> */}
      {/* <Card>
        <h2 className={css.titleSecond}>
          <IoMdMenu className={css.icon} />
          Card title!
        </h2>
        <p>Text between opening and closing tag</p>
      </Card> */}
      {/* <Button name="Olga" /> */}
      {/* <h2 className={css.titleCurrent}>Current value: {isOpen && currentValue}</h2> */}
      {/* <Button onClick={onPlus}>Current value plus</Button> */}
      {/* <Button onClick={onMinus}>Current value minus</Button> */}
      {/* <Button onClick={onReset}>Reset</Button> */}
      {/* <Button onClick={toggle}>{isOpen ? 'Hide' : 'Show'}</Button> */}
      {/* <LoginForm onLogin={handleLogin} /> */}
      {/* <SearchBar value={inputValue} onChange={handleChange} /> */}
    </>
  );
}

export default App;
