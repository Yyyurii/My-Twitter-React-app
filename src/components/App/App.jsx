import React, { Component } from 'react';
import './App.css';
import AppHeadre from '../AppHeader/';
import SearchPanel from '../SearchPanel';
import PostStatusFilter from '../PostStatusFilter';
import PostList from '../PostList/';
import PostAddForm from '../PostAddForm';

export default class App extends Component {

  state = {
    data: [
      {label: "Work hard", important: true, id: "qwe"},
      {label: "play hard", important: false, id: "asd"}, 
      {label: "That's all", important: false, id: "zxc"}
    ]
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index +1)]
      return {
        data: newArr
      }
    })
    
  }
  render() {

    const {data} = this.state;
    return (
      <div className="app">
        <AppHeadre />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={data}
                  onDeleted={this.deleteItem} />
        <PostAddForm />
      </div>
    );
  }
}
