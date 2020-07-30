import React from 'react';
import './App.css';
import AppHeadre from '../AppHeader/';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList/';
import PostAddForm from '../PostAddForm';

const App = () => {

  const data = [
    {label: "Work hard", important: true, id: "qwe"},
    {label: "play hard", important: false, id: "asd"}, 
    {label: "That's all", important: false, id: "zxc"}
  ]
  return (
    <div className="app">
      <AppHeadre />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
}

export default App;