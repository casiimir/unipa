import { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100000),
        todo: inputValue,
      },
    ]);
  };

  return (
    <form className="AddTodo" onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTodo;
