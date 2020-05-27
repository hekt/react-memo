import React, {Component} from 'react';

import { ArticleData } from 'article';
import { Article } from 'components/Article';
import { SearchForm } from 'components/SearchForm';
import { RegisterFormModal } from 'components/Modal';

type AppProps = {
  articles: ArticleData[]
};

type AppState = {
  articles: ArticleData[],
  filteredArticles: ArticleData[]
};

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      articles: this.props.articles,
      filteredArticles: this.props.articles,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(query: string) {
    let articles: ArticleData[];
    if (query === '') {
      articles = this.state.articles;
    } else {
      articles = this.state.articles.filter((article) => {
        return article.title.indexOf(query) !== -1;
      });
    }
    this.setState({
      filteredArticles: articles,
    });
  }

  handleSubmit(articles: ArticleData[]) {
    const newArticles = this.state.articles.concat(articles);
    this.setState({
      articles: newArticles,
      filteredArticles: newArticles,
    });
  }

  render() {
    const articles = this.state.filteredArticles.map((article) => {
      return (
        <Article
          key={article.title}
          title={article.title}
          lines={article.lines}
        />
      );
    });
    return (
      <div>
        <div className="heading">
          <SearchForm
            onChange={this.handleChange}
          />
          <RegisterFormModal
            onSubmit={this.handleSubmit}
          />
        </div>
        {articles}
      </div>
    );
  }
}

