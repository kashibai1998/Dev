import React from "react";
import { useSelector } from "react-redux";

const NewTodoStoreImpl = () => {
  const { newTodo } = useSelector((store) => store.newTodo);
  console.log(newTodo);
  return <div>newTodoStoreImpl</div>;
};

export default NewTodoStoreImpl;
