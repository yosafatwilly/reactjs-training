import React from 'react';
import PostList from './PostList';

const App = () => {
  console.log("Return PostList App.js")
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;