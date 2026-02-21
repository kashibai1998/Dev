import React, { useState } from "react";

function createTodos() {
  let todo = [];
  for (let i = 0; i < 5; i++) {
    let td = {
      id: i,
      title: "Task" + i,
      status: "Active",
    };
    todo.push(td);
  }
  return todo;
}

const tasks = createTodos();

const Todo = () => {
  const [todos, setTodos] = useState(tasks);
  const [text, setText] = useState("");

  const handleAdd = () => {
    const td = {
      id: Date.now(),
      title: text,
      status: "Active",
    };
    setTodos((prev) => [...prev, { ...td }]);
  };
  const handleUpdate = (tId) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (tId !== todo.id) return todo;
        return {
          ...todo,
          status: todo.status == "Active" ? "Completed" : "Active",
        };
      });
    });
  };
  const handleDelete = (tId) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id != tId;
      });
    });
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>
                {todo.title} - {todo.status}
              </p>
              <button onClick={() => handleUpdate(todo.id)}>update</button>
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
