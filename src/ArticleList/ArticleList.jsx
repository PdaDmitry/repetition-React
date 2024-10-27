import { ArticleListElem } from '../ArticleListElem/ArticleListElem';
import css from './ArticleList.module.css';

export function ArticleList({ items }) {
  return (
    <ul className={css.contUl}>
      {items.map(({ objectID, url, title }, index = 1) => (
        <li key={objectID} className={css.listElem}>
          <p>{index + 1}.</p>
          <ArticleListElem url={url} title={title} />
        </li>
      ))}
    </ul>
  );
}
