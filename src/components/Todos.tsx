
import { Todo } from '../App';

interface Props {
    todos: Todo[];
    toggleTodo: (selectedTodo: Todo) => void;
    removeTodo: (selectedTodo: Todo) => void;

}
export const Todos = ({todos, toggleTodo, removeTodo}: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <div>
          <label htmlFor="todo">
            <input
              type="checkbox"
              checked={todo.complete}
              id="todo"
              onChange={() => toggleTodo(todo)}
              className='mr-2'
            />
            {todo.text}
          </label>
          <button className='border rounded-full bg-red-500 p-2 font-bold text-xs text-white ml-8' onClick={() => removeTodo(todo)} type="button">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
