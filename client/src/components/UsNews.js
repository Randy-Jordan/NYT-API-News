import React, {useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import Story from './Story';
import Header from './Header';

function UsNews() {
  const [{ response, error, isLoading }, doFetch] = useFetch('/fakeJSON/usNews.JSON');
  useEffect(() => {
    doFetch();
  }, [doFetch]);
  
  return (
    <>
    <Header />
    <main>
      {response && response.results.map((item,i) => (
        <Story
          className={i === 1 || i % 3 === 1 ? 'hero' : 'not'}
          key={item.title}
          title={item.title}
          url={item.url}
          multimedia={item.multimedia && item.multimedia[0].url}
          time={item.published_date}
          byline={item.byline}
        />
      ))}
    </main>
    </>
  );
}

export default UsNews;
