import React from 'react';

import { Loading } from '../components/general/Loading';

import history from '../services/history';

function LostPage() {

  const eventHandle = (e) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <>
      <div className="full-body">
        <Loading />
        <h3 className='blog-title-main'>You lost?</h3>
        <p className='title-paragraph'>Not to worry, it happens to all of us.</p>
        <button to='/' onClick={(e) => eventHandle(e)}>Head Home</button>
      </div>
    </>
  );
}

export default LostPage;
