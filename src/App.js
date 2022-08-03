import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(false);
  const [statue, setStatue] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //useEffect
  useEffect(() => {
    switch (statue) {
      case "complete":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "uncomplete":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [statue, todos]);
  //function

  return (
    <div className={!theme ? "App" : "App2"}>
      <div>
        <Header theme={theme} />
        <Form
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          theme={theme}
          setTheme={setTheme}
        />
        <TodoList
          filteredTodos={filteredTodos}
          todos={todos}
          theme={theme}
          setTodos={setTodos}
          setStatue={setStatue}
        />
      </div>
    </div>
  );
};

export default App;
