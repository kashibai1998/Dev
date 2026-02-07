export function createTodos() {
  let todos = [];
  for (let i = 0; i < 50; i++) {
    let todoObj = {
      id: i,
      name: "Task " + i,
      status: "Active",
    };
    todos.push(todoObj);
  }

  return todos;
}

export function filterTodos(todos, status) {
  return todos.filter((todo) => {
    if (status == "All") return true;
    else if (status == "Active") return todo.status == status;
    else if (status == "Completed") return todo.status == status;
  });
}
