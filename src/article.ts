import { atom } from 'recoil';

import { load } from 'storage';

export type ArticleData = {
  title: string;
  lines: string[];
};

const initialArticleDataList: ArticleData[] = parseArticles(load());
export const articleDataState = atom({
  key: 'articleDataList',
  default: initialArticleDataList,
});
export const filteredArticleDataState = atom({
  key: 'filteredArticleDataList',
  default: initialArticleDataList,
});

export function parseArticles(text: string): ArticleData[] {
  const articles: ArticleData[] = [];
  let title = '';
  let texts: string[] = [];
  text.split('\n').forEach((l: string) => {
    if (l.indexOf('# ') !== 0) {
      texts.push(l);
      return;
    }

    if (title !== '') {
      articles.push({
        title,
        lines: texts,
      });
    }

    title = l.slice(2);
    texts = [];
  });

  if (title !== '') {
    articles.push({
      title,
      lines: texts,
    });
  }

  return articles;
}
