import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TodoRQuery = () => {
  const qc = useQueryClient();
  const { data } = useQuery({
    queryKey: ["todos"],

    queryFn: () => {
      const data = fetch("https://jsonplaceholder.typicode.com/todos?_limit=1")
        .then((res) => res.json())
        .then((data) => data);
      return data;
    },
  });

  const addTodo = useMutation({
    mutationFn: async (newTodo) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          id:301,
          title:"hello"
        }),
      })
      const data = await res.json()
        // .then((response) => response.json())
        // .then((json) => json);
        console.log("new data",data)
      return data;
    },
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
