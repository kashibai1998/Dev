import React from "react";
import { useGetTodoQuery } from "../store/rtk/rtkQuery";

const TodoRTK = () => {
    const {data} = useGetTodoQuery()
  return (
    <div>
      <button onClick={() => addTodo.mutate({ title: "new todo" })}>
        add Todo
      </button>
      {data?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default TodoRTK;
