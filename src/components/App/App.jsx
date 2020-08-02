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
      { label: "Work hard", important: true, like: false, id: "qwe" },
      { label: "play hard", important: false, like: false, id: "asd" },
      { label: "That's all", important: false, like: false, id: "zxc" }
    ],
    term: ''
  }

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  onToggleLike = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];
      const newItem = { ...old, like: !old.like };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  maxId = 4;

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  searchPosts = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1
    });
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  render() {

    const { data, term } = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.searchPosts(data, term);
    return (
      <div className="app">
        <AppHeadre
          liked={liked}
          allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter />
        </div>
        <PostList posts={visiblePosts}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike} />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}
