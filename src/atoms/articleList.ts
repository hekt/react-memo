import { atom } from 'recoil';

import { ArticleData, parseArticles } from 'models/article';
import { load } from 'infrastructures/storage';

const initialArticleList: ArticleData[] = parseArticles(load());

export const articleListState = atom({
  key: 'articleList',
  default: initialArticleList,
});
