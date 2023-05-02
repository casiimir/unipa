import { useState, useEffect } from "react";
import AddTodo from "./components/addTodo/AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then(({ todos }) => setTodos(todos));
  }, []);

  const onHandleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const getTodayDate = () =>
    `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

  return (
    <div className="wrapper">
      <h3>{getTodayDate()}</h3>
      <AddTodo setTodos={setTodos} />
      {todos.map((item) => (
        <p className="todo" onClick={() => onHandleDelete(item.id)}>
          - {item.todo}
        </p>
      ))}
    </div>
  );
}

export default App;
