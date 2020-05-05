import React, { Component } from "react";
import "./todo.scss";

export class TodoInput extends Component {
  state = {
    showPopup: false
  };

  openDialog = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    const { item, handleInputChange, onSubmit, modifyItem } = this.props;
    return (
      <>
        <div>
          {this.state.showPopup ? (
            <form onSubmit={onSubmit} className="form">
              <input
                type="text"
                value={item}
                className="form__input"
                onChange={handleInputChange}
              />
              <button className="form__btn">
                {modifyItem ? "Edit task" : "Add task"}
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
        <div>
          <button className="plus-btn" onClick={this.openDialog}>
            +
          </button>
        </div>
      </>
    );
  }
}

export default TodoInput;
