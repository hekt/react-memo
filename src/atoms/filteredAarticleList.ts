import { selector } from 'recoil';

import { filterQueryState } from 'atoms/filterQuery';
import { articleListState } from 'atoms/articleList';

export const filteredArticleListState = selector({
  key: 'filteredArticleListState',
  get: ({get}) => {
    const query = get(filterQueryState);
    const list = get(articleListState);

    if (query === '') {
      return list;
    }

    return list.filter((article) => {
      return article.title.indexOf(query) !== -1;
    });
  },
})
