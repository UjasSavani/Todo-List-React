import React, { useContext } from 'react';
import { TodoContext } from './TodoListInput';
import "../css/TodoList.css";

function TodoListOutput() {
  const { taskList, setTaskList } = useContext(TodoContext);

  function removeElement(id) {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  }

  return (
    <div className="task-list">
      {taskList && taskList.map((task) => (
        <div className="task-item" key={task.id}>
          {task.title}
          <button
            onClick={(e) => {
              e.preventDefault();
              removeElement(task.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoListOutput;
