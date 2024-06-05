import { useRef, useState } from "react";
import "./App.css";

function App() {
  // * States.
  const [todos, setTodos] = useState(["sasasa"]);

  const inputRef = useRef();

  // * Functions.
  const handleAddTodo = () => {};  


  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <ol>
          {todos.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
        <input type="text" placeholder="Enter item .." ref={inputRef} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
