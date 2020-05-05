import React, { Component } from "react";
import "./todo.scss";

export class TodoItems extends Component {
  render() {
    const { title, deleteTodo, handleTaskEdit } = this.props;
    return (
      <div className="todoItem">
        <p>{title}</p>
        <div className="todoItem__icons">
          <span class="material-icons" onClick={handleTaskEdit}>
            build
          </span>
          <span class="material-icons" onClick={deleteTodo}>
            delete
          </span>
        </div>
      </div>
    );
  }
}

export default TodoItems;
