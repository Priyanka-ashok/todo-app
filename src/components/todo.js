import React, { Component } from "react";

//Basic Todo App 
export class TodoApp extends Component {
  state = {
    todos: ["Learn React", "Learn Redux", "Hooks"],
    items: "",
    doneListItems: []
  };

  handleInput = e => {
    this.setState({
      items: e.target.value
    });
  };

  handleTodoInput = e => {
    e.preventDefault();
    const clonedTodoArray = this.state.todos.map(item => item);
    clonedTodoArray.push(this.state.items);
    this.setState({ todos: clonedTodoArray });
  };

  handleTodoListChange = (todos, doneValue) => {
    const clonedDoneArray = [];
    clonedDoneArray.push(doneValue);
    this.setState({ doneListItems: clonedDoneArray, todos: todos });
  };

  removeItem = (event, clickedIndex) => {
    const filteredList = this.state.todos.filter(
      (item, index) => index !== clickedIndex
    );
    this.handleTodoListChange(filteredList, this.state.todos[clickedIndex]);
  };

  render() {
    return (
      <div>
        <form>
          <input
            className="input"
            type="text"
            placeholder="Enter task"
            onChange={this.handleInput}
            value={this.state.items}
          />
          <button
            type="submit"
            name="submit"
            value="submit"
            onClick={this.handleTodoInput}
          >
            Add
          </button>
          {this.state.todos.map((todoItem, index) => {
            return (
              <>
                <li
                  key={index}
                  onClick={event => this.removeItem(event, index)}
                >
                  {todoItem}
                </li>
              </>
            );
          })}
        </form>
      </div>
    );
  }
}

export default TodoApp;
