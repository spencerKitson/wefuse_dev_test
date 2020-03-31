import React from 'react';

import { Navbar } from '../components/general/Navbar';
import { Banner } from '../components/home/Banner';
import { BlogList } from '../components/blog/BlogList';
import { Footer } from '../components/general/Footer';

function Signin() {
  return (
    <>
      <Navbar />
      <Banner />
      <BlogList />
      <Footer />
    </>
  );
}

export default Signin;
