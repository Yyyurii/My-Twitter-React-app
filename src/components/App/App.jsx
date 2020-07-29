import React from 'react';
import './App.css';
import AppHeadre from '../AppHeader/';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList/';
import PostAddForm from '../PostAddForm';

const App = () => {
  return (
    <div className="app">
      <AppHeadre />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
}

export default App;