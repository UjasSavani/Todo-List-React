import React, { useState } from 'react';
import { todoAddElement, todoCurrentTaskElement, todoEditElement, todoFlagElement } from '../redux/actions/todoActions';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import TodoListOutput from './TodoListOutput.js';

const TodoListInput = ({ dataFromStore, addTodoAction, setCurrentTask, updateTodoElement, editFlagTask }) => {
  const [data, setData] = useState({ id: '', title: '' });

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task here"
          value={dataFromStore.currentTask}
          onChange={(e) => {
            e.preventDefault();
            setCurrentTask(e.target.value)
            setData({ ...data, id: uuidv4() });
          }}
        />

        {(dataFromStore.editFlag === 0) ? <button
          onClick={(e) => {
            e.preventDefault();
            if (dataFromStore.currentTask) {
              addTodoAction(data.id, dataFromStore.currentTask);
              setCurrentTask(``)
            }
          }}
        >
          Add
        </button> : <button
          onClick={(e) => {
            e.preventDefault();
              if(dataFromStore.currentTask.length !== 0){
                updateTodoElement(dataFromStore.editableData.id, dataFromStore.currentTask)
              }
          }}
        >
          Update
        </button>}

        <button
          onClick={(e) => {
            e.preventDefault();

            editFlagTask(0, {id: ``, title: ``})
            setCurrentTask(``)
          }}
        >
          Cancel
        </button>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataFromStore: state.todoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addTodoAction: (id, title) => (dispatch(todoAddElement(id, title))),
  setCurrentTask: (task) => (dispatch(todoCurrentTaskElement(task))),
  updateTodoElement: (id, title) => (dispatch(todoEditElement(id, title))),
  editFlagTask: (flag, todo) => (dispatch(todoFlagElement(flag, todo)))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListInput);
