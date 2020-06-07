import { selector } from 'recoil';

import { filterQueryState } from 'atoms/filterQuery';
import { articleListState } from 'atoms/articleList';

export const filteredArticleListState = selector({
  key: 'filteredArticleListState',
  get: ({get}) => {
    const list = get(articleListState);

    const queries = get(filterQueryState).split(' ');

    return list.filter((article) => {
      return queries.every((query) => {
        const q = query.trim().toLowerCase();
        return (q === '') || (article.title.toLowerCase().indexOf(q) !== -1);
      });
    });
  },
})
