import React, { useState, ChangeEvent } from "react";

interface Props {
  addTodo: (text: string) => void;
}

export default function FormAddTodo({ addTodo }: Props) {
  const [text, setText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) return;
    addTodo(trimmedText);
    setText("");
  };
  return (
    <div>
      {" "}
      <form className="flex gap-4" onSubmit={handleSubmit}>
        <label htmlFor="todo">
         
          <input
            className="border p-2"
            type="text"
            id="todo"
            placeholder="ingrese todo"
            value={text}
            onChange={handleChange}

          />
        </label>
        <button className="border p-2 bg-blue-300 font-bold text-white" type="submit">Add todo</button>
      </form>
    </div>
  );
}
