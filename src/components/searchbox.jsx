import React, { useEffect, useState } from 'react';
import { pokeMonApi } from '../Api/APi';
import Cards from './Cards';

function Searchbox() {
  const [searchValue, setSearchValue] = useState(null);
  const [searchResult, setSearchResult] = useState({}); 

  const doApiCall = async () => {
    const result = await pokeMonApi(searchValue);
    setSearchResult(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    const delayTime = setTimeout(() => {
      doApiCall();
    }, 3000);

    return () => clearTimeout(delayTime);
  }, [searchValue]);

  const doSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={doSearch} />
      <Cards searchResult={searchResult} />
    </>
  );
}

export default Searchbox;