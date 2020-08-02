import React from 'react';
import './AppHeader.css';

const AppHeadre = ({liked, allPosts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Yyyurii</h1>
      <h2>{allPosts} entries, like {liked}</h2>
    </div>
  )
}

export default AppHeadre;