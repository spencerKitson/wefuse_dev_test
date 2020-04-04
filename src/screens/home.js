import React, { useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { Banner } from '../components/home/Banner';
import { BlogList } from '../components/blog/BlogList';
import { Loading } from '../components/general/Loading';

function Home() {
  const { loading, homepage, getHomeData } = useContext(GlobalContext);

  useEffect(() => {
    getHomeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading
        ? <div className="full-body">
            <Loading />
          </div>
        : <div className="contain">
            <Banner/>
            <BlogList />
          </div>
      }
    </>
  );
}

export default Home;
