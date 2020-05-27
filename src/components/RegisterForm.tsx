import React, { Component } from 'react';
import { save } from '../storage';
import { ArticleData, parseArticles } from '../article';

export type RegisterFormProps = {
  onSubmit: (articles: ArticleData[]) => void
}

export class RegisterForm extends Component<RegisterFormProps> {
  constructor(props: RegisterFormProps) {
    super(props);
    this.submitData = this.submitData.bind(this);
  }
  submitData(event: any) {
    const formElem = event.target.parentElement;
    const textElem = formElem.querySelector('.text');

    this.props.onSubmit(parseArticles(textElem.value));
    save(textElem.value);

    textElem.value = '';
  }
  render() {
    return (
      <div className="register-form">
        <textarea className="text" placeholder="text"></textarea><br />
        <button onClick={(ev) => this.submitData(ev)}>Register</button>
      </div>
    );
  }
}
