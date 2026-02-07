import { useMemo, useState } from "react";
import { createTodos, filterTodos } from "../utils/utils";

const tasks = createTodos();

export default function Todo() {
  const [todos, setTodos] = useState(tasks);
  const [tab, setTab] = useState("All");
  const [text, setText] = useState("");
  const handleAddTodo = () => {
    const todoObj = {
      id: new Date().getTime().toString(),
      name: text,
      status: "Active",
    };

    setTodos((prev) => [...prev, todoObj]);
  };

  const handleTask = (tId) => {
    setTodos((prevTodos) => {
      return prevTodos.map((t) => {
        if (t.id !== tId) {
          return t;
        }
        return {
          ...t,
          status: t.status == "Active" ? "Completed" : "Active",
        };
      });
    });
  };

  const fltrTodos = useMemo(() => {
    if (tab == "All") return todos;
    return filterTodos(todos, tab);
  }, [tab, todos]);

  return (
    <div>
      <h3>To - Do App</h3>

      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add</button> */}
      <div>
        <button onClick={() => setTab("All")}>All</button>
        <button onClick={() => setTab("Active")}>Active</button>
        <button onClick={() => setTab("Completed")}>Completed</button>
      </div>
      <div>
        {fltrTodos.map((t) => (
          <div key={t.id} onClick={() => handleTask(t.id)}>
            {t.name} - {t.status}
          </div>
        ))}
      </div>
    </div>
  );
}
