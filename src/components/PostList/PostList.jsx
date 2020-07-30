import React from 'react';
import './PostList.css';
import PostListItem from '../PostListItem';

const PostList = ({ posts }) => {

  const element = posts.map((item) => {

    if (typeof item === 'object' && isEmpty(item)) {
      const {id, ...itemProps} = item;
      return (
        <li key={id} className="list-group-item">
          <PostListItem 
            // label={item.label}
            // important={item.important}
            {...itemProps}
            />
        </li>
      )
    }
  })

  function isEmpty(obj) {
    for(let key in obj)
        {
            return true;
        }
        return false;
  }

  return (
    <ul className="app-list list-group">
      {element}
    </ul>
  )
}

export default PostList;