import React from 'react';

export const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handelCheckBoxClick = () => {
    toggleComplete(todo.id);
  };

  const handelRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <li style={{ display: 'flex' }}>
      <input type="checkbox" onClick={handelCheckBoxClick} />
      <li
        style={{
          color: 'blake',
          textDecoration: todo.completed ? ' line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handelRemoveClick}>X</button>
    </li>
  );
};

export default Todo;
