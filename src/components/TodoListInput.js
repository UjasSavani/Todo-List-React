import React, { useState, createContext } from 'react';
import TodoListOutput from './TodoListOutput.js';
import "../css/TodoList.css";

export const TodoContext = createContext();

const TodoListInput = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <TodoContext.Provider value={{ taskList, setTaskList }}>
      <div className="container">
        <h1>Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter your task here"
            value={task}
            onChange={(e) => {
              e.preventDefault();
              setTask(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if(task){
                setTaskList([...taskList, { id: counter, title: task }]);
                setCounter(counter + 1);
                setTask('');
              }
            }}
          >
            Add
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setTask('');
            }}
          >
            Clear
          </button>
        </div>
        <TodoListOutput />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoListInput;
