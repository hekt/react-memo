import React, {Component} from 'react';

export class SearchForm extends Component<{
  onChange: (query: string) => void;
}> {
  render() {
    return (
      <div className="search-form">
        <input
          type="text"
          placeholder="Search"
          onChange={(ev) => this.props.onChange(ev.target.value)}
        />
      </div>
    );
  }
}
