import TodoFooter from "./TodoFooter";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
const TodoList = ({ todos, theme, setTodos, setStatue, filteredTodos }) => {
  // FUNCTION TO DELETE ITEM
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //FUNCTION FOR WHEN ITEM IS COMPLETE
  const hadleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="todo-container ">
      <div>
        {filteredTodos.map((todo) => {
          return (
            <div className={!theme ? "todo" : "todo2"}>
              <div className="flex justify-between items-center px-3">
                <div className="flex items-center gap-2">
                  <div
                    className={
                      todo.complete
                        ? "check  flex items-center text-center text-white cursor-pointer"
                        : "check2 "
                    }
                    onClick={() => hadleComplete(todo)}
                  >
                    {todo.complete ? <BsCheck /> : ""}
                  </div>
                  <h1 className={todo.complete ? "h1" : ""}>{todo.title}</h1>
                </div>
                <div>
                  {todo.complete ? (
                    ""
                  ) : (
                    <AiOutlineClose
                      className={
                        !theme
                          ? "cursor-pointer text-gray-500"
                          : "cursor-pointer text-white"
                      }
                      onClick={() => handleDelete(todo)}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <TodoFooter
        theme={theme}
        todos={todos}
        setStatue={setStatue}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoList;
