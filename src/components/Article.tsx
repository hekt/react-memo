import React, { Component } from 'react';

import { ArticleData } from 'article';

export class Article extends Component<ArticleData> {
  render() {
    const lines = this.props.lines
      .flatMap((l) => {
        return [l, React.createElement('br')];
      })
      .slice(0, -1);
    return (
      <article>
        <h1>{this.props.title}</h1>
        <p>{lines}</p>
      </article>
    );
  }
}
