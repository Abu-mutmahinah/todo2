import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const Form = ({ todos, setTodos, input, setInput, theme, setTheme }) => {
  // FUNCTION THAT HANDLE SUBMITION
  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: Math.random() * 100, title: input, complete: false },
    ]);
    setInput("");
  };
  return (
    <div className="form-container">
      <div className="form">
        <div className="title">
          <h1>T O D O</h1>
          <moon
            onClick={() => {
              setTheme(!theme);
            }}
            className="moon"
          >
            {theme ? (
              <BsSunFill className="text-white font-bold" />
            ) : (
              <BsMoonFill className="text-white font-bold " />
            )}
          </moon>
        </div>
        <form onSubmit={submitHandler}>
          <input
            className={!theme ? "input" : "input2"}
            type="text"
            placeholder="Enter task"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
