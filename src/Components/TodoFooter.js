const TodoFooter = ({ theme, todos, setStatue, setTodos }) => {
  return (
    <div className={!theme ? "footer-container" : "footer-container2"}>
      <div className={!theme ? "footer" : "footer2"}>
        <div className="cursor-pointer">{todos.length} items left</div>
        <ul className="flex gap-3 ">
          <li
            className="cursor-pointer hover:text-blue-700"
            onClick={() => setStatue("all")}
          >
            All
          </li>
          <li
            className="cursor-pointer hover:text-blue-700"
            onClick={() => setStatue("uncomplete")}
          >
            Uncomplete
          </li>
          <li
            className="cursor-pointer hover:text-blue-700"
            onClick={() => setStatue("complete")}
          >
            Completed
          </li>
        </ul>
        <div
          className="cursor-pointer hover:text-blue-700"
          onClick={() => {
            setTodos([]);
          }}
        >
          Clear All
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;
