import React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { load } from 'storage';
import { ArticleData, parseArticles } from 'article';
import { App } from 'components/App';

import './style.css';

Modal.setAppElement('#root');

const articles: ArticleData[] = parseArticles(load());

ReactDOM.render(
  <App articles={articles} />,
  document.getElementById('root')
);
