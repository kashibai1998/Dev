import React, { useMemo, useState } from "react";

function createTodos() {
  let todos = [];
  for (let i = 0; i < 50; i++) {
    let todoObj = {
      id: "Task" + i,
      name: "Task" + i,
      status: "Active",
    };
    todos.push(todoObj);
  }
  return todos;
}

const tasks = createTodos();
const TodoImpl = () => {
  const [todos, setTodos] = useState(tasks);
  const [tab, setTab] = useState("All");

  const handleTodo = (tId) => {
    setTodos((prev) => {
      return prev.map((t) => {
        if (t.id !== tId) return t;
        return {
          ...t,
          status: t.status == "Active" ? "Completed" : "Active",
        };
      });
    });
  };

  const fltrTodos = useMemo(() => {
    if (tab === "All") return todos;

    return todos.filter((t) => {
      if (tab == "Active") return t.status == "Active";
      if (tab == "Completed") return t.status == "Completed";
    });
  }, [tab, todos]);

  return (
    <div>
      <h2>TodoImpl</h2>
      <button onClick={() => setTab("All")}>All</button>
      <button onClick={() => setTab("Active")}>Active</button>
      <button onClick={() => setTab("Completed")}>Completed</button>
      {fltrTodos.map((t) => {
        return (
          <div key={t.id}>
            <div onClick={() => handleTodo(t.id)}>
              {t.name}-{t.status}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoImpl;
