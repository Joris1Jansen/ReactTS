import React from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

import TodosContextProvider from "./store/todos-context";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    <TodosContextProvider>
      {/* <NewTodo onAddToDo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
