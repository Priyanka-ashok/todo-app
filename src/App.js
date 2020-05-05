import React, { Component } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import uuid from "uuid";
import "./App.css";
export class App extends Component {
  state = {
    items: [],
    item: "",
    id: 0,
    modifyItem: false
  };

  handleInputChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const addNewItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItem = [...this.state.items, addNewItem];
    this.setState({
      items: updatedItem,
      id: uuid(),
      item: "",
      modifyItem: false
    });
  };

  deleteTodo = id => {
    const filterTodo = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterTodo
    });
  };

  clearItems = () => {
    this.setState({
      items: []
    });
  };

  handleTaskEdit = id => {
    const filterTodo = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filterTodo,
      item: selectedItem.title,
      modifyItem: true
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoInput
          handleInputChange={this.handleInputChange}
          item={this.state.item}
          onSubmit={this.onSubmit}
          modifyItem={this.state.modifyItem}
        />
        <TodoList
          items={this.state.items}
          clearItems={this.clearItems}
          deleteTodo={this.deleteTodo}
          handleTaskEdit={this.handleTaskEdit}
        />
      </div>
    );
  }
}

export default App;
