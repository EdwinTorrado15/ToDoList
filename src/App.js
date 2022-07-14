import React from "react";

import { Fragment } from "react";
import { CreateTodoButton } from "./Components/CreateTodoButton";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoItem } from "./Components/TodoItem";
import { TodoList } from "./Components/TodoList";
import { TodoSearch } from "./Components/TodoSearch";

import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {

  const {item:todos,loading, saveItem:saveTodos, error} = useLocalStorage('TODO_V1', []);

  // Guardamos los ToDos en el localStorage en nuestro state
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Buscar toDos
  let filterTodos = [];

  if (!searchValue.length >= 1) {
    filterTodos = todos;
  } else {
    filterTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  // Marcar como completado el toDo
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  // Eliminar toDo
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}  />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p> Hubo un error...</p>}
        {(!loading && !filterTodos.length) && <p>Crea tu primer todo</p> }

        {filterTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
