import React from 'react';
import Todo from './Todo';

export const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      <ul className="the-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
