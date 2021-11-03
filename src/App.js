
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoLst from './components/TodoLst';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilterdTodos] = useState([]);
  useEffect(() => {
    if (status === "all") {
      setFilterdTodos(todos)
    }
    else if (status === "completed") {
      setFilterdTodos(todos.filter(todo => todo.completed === true));

    }
    else {
      setFilterdTodos(todos.filter(todo => todo.completed === false));

    }
  }, [status, todos]);
  console.log(filteredTodos);
  console.log(todos);
  //console.log(status)
  //console.log(todos);
  //console.log(inputText);
  return (
    <div className="whole-body">
      <header>
        <h1 style={{ marginBottom: "40px", textAlign: "center", textTransform: "uppercase" }}> <span style={{ color: "#F44336", fontSize: "40px", textTransform: "uppercase" }}>JRana's</span> To-do Lists</h1>
        <Form setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} inputText={inputText}></Form>
        <TodoLst todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoLst>
      </header>
    </div>
  );
}

export default App;
