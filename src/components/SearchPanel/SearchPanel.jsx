import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onUpdateSearch = (event) => {
    const term = event.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Search by records" 
        onChange={this.onUpdateSearch} />
    )
  }
}
