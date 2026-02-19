import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,deleteTodo,fetchTodos,updateTodo } from './store/newTodoSlice';

const NewTodoStore = () => {
  const [text, setText] = useState("");
  const todos = useSelector((store) => store.newTodo);
  const dispatch = useDispatch()
  console.log("k",todos)
  useEffect(()=>{
    console.log("k")
   dispatch(fetchTodos())
   console.log("r",todos)
  },[])


  const handleAddTasks = () => {
    let tdObj = {
      id: Date.now(),
      name: text,
      status: "Active",
    };
   dispatch(addTodo(tdObj))
  };

  const handleDelete = (tId) => {
    // let fltrTodos = todos.filter((todo) => {
    //   return todo.id !== tId;
    // });

    // setTodos(fltrTodos);
    dispatch(deleteTodo(tId))
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
  return (
    <div>
      NewTodoStore
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTasks}>add</button>
      {todos.map((todo) => (
          <div key={todo.id} style={{ display: "flex" }}>
            <div data-testid="todo">
              {todo.title} - {todo.id}
            </div>
            <div>
              <button onClick={() => handleUpdate(todo.id)}>update</button>
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default NewTodoStore