import React, { Component } from "react";
import TodoItems from "./todoItem";
import "./todo.scss";

export class TodoList extends Component {
  render() {
    const { items, clearItems, deleteTodo, handleTaskEdit } = this.props;
    return (
      <div className="todoList">
        <h1>List of Tasks</h1>
        {items.map((todoItem, index) => {
          return (
            <TodoItems
              key={todoItem.id}
              title={todoItem.title}
              deleteTodo={() => deleteTodo(todoItem.id)}
              handleTaskEdit={() => handleTaskEdit(todoItem.id)}
            />
          );
        })}
        <button className="clear-list-btn" onClick={clearItems}>
          Clear List
        </button>
      </div>
    );
  }
}

export default TodoList;
