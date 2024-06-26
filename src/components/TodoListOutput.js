import React from 'react';
import { connect } from 'react-redux';
import { todoRemoveElement } from '../redux/actions/todoActions';
import "../css/TodoList.css";

function TodoListOutput({ data, deleteTodoTask }) {
  return (
    <div className="task-list">
      {data.todoTaskList && data.todoTaskList.map((task) => (
        <div className="task-item" key={task.id}>
          <span>{task.title}</span>
          <div>
            <button
              className="delete-button"
              onClick={(e) => {
                e.preventDefault();
                deleteTodoTask(task.id);
              }}
            >
              Delete
            </button>
            <button
              className="edit-button"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodoTask: (id) => dispatch(todoRemoveElement(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListOutput);
