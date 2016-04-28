import React from 'react';
import { Route, IndexRoute } from 'react-router';
import PostsIndex from './components/posts_index.js'
import App from './components/app.js';

const Greeting = function(props){
  return <div>Hey..</div>;
};
export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
  </Route>
);
