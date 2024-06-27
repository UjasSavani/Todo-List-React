import React from 'react';
import { connect } from 'react-redux';
import { todoCurrentTaskElement, todoFlagElement, todoRemoveElement } from '../redux/actions/todoActions';

function TodoListOutput({ data, deleteTodoTask, todoEditFlagTask, setCurrentTask }) {
  return (
    <div className="task-list">
      {data.todoTaskList && data.todoTaskList.map((value) => (
        <div className="task-item" key={value.id}>
          <span>{value.title}</span>
          <div>
            <button
              className="delete-button"
              onClick={(e) => {
                e.preventDefault();
                deleteTodoTask(value.id);
              }}
            >
              Delete
            </button>

            <button
              className="edit-button"
              onClick={(e) => {
                e.preventDefault();

                todoEditFlagTask(1, value)
                setCurrentTask(value.title)
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
  deleteTodoTask: (id) => (dispatch(todoRemoveElement(id))),
  todoEditFlagTask: (flag, todo) => (dispatch(todoFlagElement(flag, todo))),
  setCurrentTask: (task) => (dispatch(todoCurrentTaskElement(task)))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListOutput);
