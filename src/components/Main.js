import { useToDoList } from "./Context";

function Main() {
  const { toDoList, setToDoList, uncheckedAmount, setUncheckedAmount } =
    useToDoList();

    // This is for handleCheckbox and handleAllCheckbox to change inCompleted status of element in ToDoList by id
  function updateToDo(id) {
    const changedToDoList = toDoList;
    changedToDoList[id].isCompleted = !changedToDoList[id].isCompleted;
    setToDoList(changedToDoList);
    setUncheckedAmount(
      toDoList.filter((element) => !element.isCompleted).length
    );
  }

//It is for style till uptadeToDo func
  function handleCheckbox(e, index) {
    var listElement = e.target.parentElement.parentElement;
    listElement.className === ""
      ? (listElement.className = "completed")
      : (listElement.className = "");
    updateToDo(index);
  }
  
//It is for style till uptadeToDo func
  function handleAllCheckbox() {
    if (uncheckedAmount) {
      toDoList.map((element, id) => {
        if (!element.isCompleted) {
          document.getElementById(id).className = "completed";
          document.getElementById(id).firstChild.firstChild.checked = true;
          updateToDo(id);
        }
      });
    } else {
      toDoList.map((element, id) => {
        document.getElementById(id).className = "";
        document.getElementById(id).firstChild.firstChild.checked = false;
        updateToDo(id);
      });
    }
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onClick={() => handleAllCheckbox()}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {toDoList.map((element, index) => {
          return (
            <li
              key={index}
              id={index}
              className={element.isCompleted ? "completed" : ""}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  defaultChecked={element.isCompleted}
                  onChange={(e) => handleCheckbox(e, index)}
                />
                <label>{element.title}</label>
                <button className="destroy"></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Main;
