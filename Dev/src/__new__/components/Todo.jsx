import React, { useMemo, useState } from "react";
const tasks = getServerSideProps();
const Todo = () => {
  const [todos, setTodos] = useState(tasks);
  const [text, setText] = useState("");
  const [tab, setTab] = useState("All");

  const handleAddTasks = () => {
    let tdObj = {
      id: Date.now(),
      name: text,
      status: "Active",
    };
    setTodos((prev) => [...prev, tdObj]);
  };

  const handleDelete = (tId) => {
    let fltrTodos = todos.filter((todo) => {
      return todo.id !== tId;
    });

    setTodos(fltrTodos);
  };

  const handleUpdate = (tId) => {
    const tskname = prompt("whats the task name");
    let fltrTodos = todos.map((todo) => {
      if (todo.id !== tId) return todo;
      return {
        ...todo,
        name: tskname ? tskname : todo.name,
        status: todo.status == "Active" ? "Completed" : "Active",
      };
    });

    setTodos(fltrTodos);
  };

  const fltrTodos = useMemo(() => {
    if (tab === "All") return todos;

    return todos.filter((todo) => {
      if (tab === "Active") return todo.status == "Active";
      else if (tab === "Completed") return todo.status == "Completed";
    });
  }, [todos, tab]);

  return (
    <div>
      <p>Todos</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTasks}>add</button>
      <div>
        <button onClick={() => setTab("All")}>All</button>
        <button onClick={() => setTab("Active")}>Active</button>
        <button onClick={() => setTab("Completed")}>Completed</button>
        {fltrTodos.map((todo) => (
          <div key={todo.id} style={{ display: "flex" }}>
            <div data-testid="todo">
              {todo.name} - {todo.status}
            </div>
            <div>
              <button onClick={() => handleUpdate(todo.id)}>update</button>
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

function getServerSideProps() {
  let tasks = [];
  for (let i = 0; i < 5; i++) {
    let todoObj = {
      id: i,
      name: "Task" + i,
      status: "Active",
    };
    tasks.push(todoObj);
  }
  return tasks;
}
