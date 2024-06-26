import React, { useState } from 'react';
import "../css/TodoList.css";
import { todoAddElement } from '../redux/actions/todoActions';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

const TodoListInput = ({ dataFromStore, addTodoAction }) => {
  const [data, setData] = useState({ id: '', title: '' });

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task here"
          value={data.title}
          onChange={(e) => {
            e.preventDefault();
            setData({ id: uuidv4(), title: e.target.value });
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (data.title) {
              addTodoAction(data.id, data.title);
              setData({ id: '', title: '' });
            }
          }}
        >
          Add
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setData({ ...data, title: '' });
            console.log(dataFromStore.todoTaskList);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataFromStore: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoAction: (id, title) => dispatch(todoAddElement(id, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListInput);
