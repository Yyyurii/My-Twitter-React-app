import React from 'react';
import './PostAddForm.css';

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input 
        type="text"
        placeholder="what are you thinking now?"
        className="form-control new-post-label" />
        <button 
          type="submit"
          className="btn btn-outline-secondary">
          Add
        </button>
    </form>
  )
}

export default PostAddForm;