import React, {useEffect, useContext} from 'react';

import { BlogBanner } from '../components/blog/BlogBanner';
import { BlogBody } from '../components/blog/BlogBody';
import { Loading } from '../components/general/Loading';

import { GlobalContext } from '../context/GlobalState';

import { useParams } from 'react-router-dom';


function BlogPage() {

  const { loading, post, getBlogPost } = useContext(GlobalContext);
  const params = useParams();

  useEffect(() => {
    getBlogPost(params.slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading
      ? <div className="full-body">
          <Loading />
        </div>
      : <div className="full-body-loose">
          {post.map(posted => (
            <BlogBanner data={posted}/>
          ))}
          {post.map(posted => (
            <BlogBody data={posted}/>
          ))}
        </div>
        }

    </>
  );
}

export default BlogPage;
