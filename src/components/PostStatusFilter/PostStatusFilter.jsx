import React from 'react';
import './PostStatusFilter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn">All</button>
      <button type="button" className="btn">Like</button>
    </div>
  )
}

export default PostStatusFilter;