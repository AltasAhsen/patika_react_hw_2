import { useList } from "./Context";

function Footer() {
  const { toDoList, setToDoList, setFiltered } =
    useList();

  function handleClick(e) {
    Array.from(e.target.parentElement.parentElement.children).map(
      (element) => (element.firstChild.className = "")
    );
    e.target.className = "selected";
    switch (e.target.innerHTML) {
      case "All":
        setFiltered(0)
        break;
      case "Active":
        setFiltered(1)
        break;
      case "Completed":
        setFiltered(2)
        break;
    }
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{`${toDoList.filter((element) => !element.isCompleted).length} `}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" onClick={(e) => handleClick(e)} className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/" onClick={(e) => handleClick(e)}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" onClick={(e) => handleClick(e)}>
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() =>
          setToDoList(toDoList.filter((element) => !element.isCompleted))
        }
      >
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
