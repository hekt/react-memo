import React from 'react';
import { RecoilRoot } from 'recoil';
import { ArticleList } from 'components/ArticleList';
import { SearchForm } from 'components/SearchForm';
import { RegisterFormModal } from 'components/Modal';

export const App = () => {
  return (
    <RecoilRoot>
      <div className="heading">
        <SearchForm />
        <RegisterFormModal />
      </div>
      <ArticleList />
    </RecoilRoot>
  );
};
