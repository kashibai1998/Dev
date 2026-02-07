import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos } from "../store/todoSlice";

export default function RtkTodo() {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((store) => store.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (isLoading) return <div>Loading...</div>;
  console.log(todos, isLoading, error);
  return (
    <div>
      RTK Todo
      <button
        onClick={() =>
          dispatch(
            addTodo({
              userId: 1,
              id: 6,
              title: "tasks",
              completed: false,
            })
          )
        }
      >
        Add
      </button>
      <div>
        {todos.map((t) => (
          <div key={t.id}>{t.title}</div>
        ))}
      </div>
    </div>
  );
}
