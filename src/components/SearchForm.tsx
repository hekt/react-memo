import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { articleDataState, filteredArticleDataState } from 'article';

export const SearchForm = () => {
  const articles = useRecoilValue(articleDataState);
  const setFilteredArticleData = useSetRecoilState(filteredArticleDataState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filteredArticles =
      value === ''
        ? articles
        : articles.filter((article) => {
            return article.title.indexOf(value) !== -1;
          });
    setFilteredArticleData(filteredArticles);
  };

  return (
    <div className="search-form">
      <input type="text" placeholder="Search" onChange={handleChange} />
    </div>
  );
};
