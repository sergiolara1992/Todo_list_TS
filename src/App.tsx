import { useState, useEffect } from "react";
import FormAddTodo from "./components/FormAddTodo";
import { Todos } from "./components/Todos";

export interface Todo {
  text: string;
  complete: boolean;
}

const initialtodos = [
  {
    text: "Learn React",
    complete: false,
  },
  {
    text: "Learn TypeScript",
    complete: false,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialtodos);
  
  // Cargar datos desde localStorage al montar el componente
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Guardar datos en localStorage cada vez que la lista de todos cambia
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (selectedTodo: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        return todo;
      });
    });
  };

  const removeTodo = (selectedTodo: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo !== selectedTodo);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 gap-6  ">
      <h2 className="text-2xl font-bold ">Todo List</h2>
      <FormAddTodo addTodo={addTodo} />
      <div>
        <Todos todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
