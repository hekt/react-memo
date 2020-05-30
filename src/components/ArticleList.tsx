import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredArticleDataState } from 'article';
import { Article } from 'components/Article';

export const ArticleList = () => {
  const articles = useRecoilValue(filteredArticleDataState);
  const filteredArticles = articles.map((a) => {
    return <Article key={a.title} title={a.title} lines={a.lines} />;
  });
  return <div>{filteredArticles}</div>;
};
