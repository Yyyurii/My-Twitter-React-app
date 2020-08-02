import React, { Component } from 'react';
import './PostAddForm.css';

export default class PostAddForm extends Component {

  state = {
    text: ''
  }

  onValueChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.text)
    this.setState({
      text: ''
    })
  }
  
  render() {

    return (
      <form className="bottom-panel d-flex" 
            onSubmit={this.onSubmit} >
        <input 
          type="text"
          placeholder="what are you thinking now?"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text} />
          <button 
            type="submit"
            className="btn btn-outline-secondary" >
            Add
          </button>
      </form>
    )
  }
}
