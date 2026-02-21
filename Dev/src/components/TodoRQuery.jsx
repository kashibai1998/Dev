import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TodoRQuery = () => {
  const qc = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],

    queryFn: () => {
      const data = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => data);
      return data;
    },
  });

  const addTodo = useMutation({
    mutationFn: (newTodo) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => json),
    onSuccess: () => {
      console.log("data updated successfully", data, data.length);
      qc.invalidateQueries(["todos"]);
    },
  });
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

export default TodoRQuery;
