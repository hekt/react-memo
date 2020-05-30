import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { append } from 'storage';
import { parseArticles, articleDataState } from 'article';

export function RegisterForm() {
  const [text, setText] = useState('');
  const [articleDataList, setArticleData] = useRecoilState(articleDataState);

  const handleClick = () => {
    setArticleData(articleDataList.concat(parseArticles(text)));
    append(text);
    setText('');
  };

  return (
    <div className="register-form">
      <textarea
        className="text"
        placeholder="text"
        value={text}
        onChange={(ev) => {
          setText(ev.target.value);
        }}
      />
      <br />
      <button onClick={handleClick}>Register</button>
    </div>
  );
}
