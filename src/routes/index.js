import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import BlogPage from '../screens/BlogPage';
import LostPage from '../screens/LostPage';


export default function Routes(){
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/blog/:slug' component={BlogPage} />
      <Route exact path="*" component={LostPage} />
    </Switch>
  )
}
