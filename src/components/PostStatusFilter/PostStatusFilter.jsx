import React from 'react';
import './PostStatusFilter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">All</button>
      <button type="button" className="btn btn-utline-secondary">Like</button>
    </div>
  )
}

export default PostStatusFilter;