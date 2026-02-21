import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, fetchTodos } from "../store/redux/rtkSlice";

const TodoStore = () => {
  const { todos: data } = useSelector((store) => store.rtkSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      <button onClick={() => dispatch(addTodos({ title: "new todo" }))}>
        add Todo
      </button>
      {data?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default TodoStore;
