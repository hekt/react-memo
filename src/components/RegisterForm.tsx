import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { append } from 'infrastructures/storage';
import { parseArticles } from 'models/article';
import { articleListState } from 'atoms/articleList';

export function RegisterForm() {
  const [text, setText] = useState('');
  const [articleList, setArticleList] = useRecoilState(articleListState);

  const handleClick = useCallback(
    () => {
      setArticleList(articleList.concat(parseArticles(text)));
      append(text);
      setText('');
    },
    [articleList, setArticleList, text]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    []
  );

  return (
    <div className="register-form">
      <textarea
        className="text"
        placeholder="text"
        value={text}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Register</button>
    </div>
  );
}
