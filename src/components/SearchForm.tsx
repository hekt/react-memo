import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import { filterQueryState } from 'atoms/filterQuery';

export const SearchForm = () => {
  const setQuery = useSetRecoilState(filterQueryState);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    [setQuery]
  );

  return (
    <div className="search-form">
      <input type="text" placeholder="Search" onChange={handleChange} />
    </div>
  );
};
