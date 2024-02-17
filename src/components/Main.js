import { useList } from "./Context";

function Main() {

  const { toDoList, setToDoList, activeList, setActiveList, filtered } =
    useList();

  // This is for handleCheckbox and handleAllCheckbox to change inCompleted status of element in ToDoList by id
  function updateToDo(id) {
    const changedToDoList = toDoList;
    changedToDoList[id].isCompleted = !changedToDoList[id].isCompleted;
    setToDoList(changedToDoList);
    console.log(toDoList)
    setActiveList(
      toDoList.filter((element) => !element.isCompleted)
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
    if (toDoList.filter((element) => !element.isCompleted).length) {
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
  function handleDestroy(e, index) {
    
    if(!e.target.parentElement.firstChild.checked){
      const changedActiveList = toDoList.filter((element) => !element.isCompleted).filter(element => element.id !== index);
      setActiveList(changedActiveList)
    }
    
    setToDoList(toDoList.filter((element) => element.id !== index));
  }

  function creatingElement(element,index){
    console.log(element)
    element.id = index;
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
            checked={element.isCompleted}
            onChange={(e) => handleCheckbox(e, index)}
          />
          <label>{element.title}</label>
          <button
            className="destroy"
            onClick={(e) => handleDestroy(e, index)}
          ></button>
        </div>
      </li>
    );
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
        {filtered === 0 && toDoList.map((element, index) => creatingElement(element,index))}
        {filtered === 1 && activeList.map((element, index) => creatingElement(element,index))}
        {filtered === 2 && toDoList.filter((element) => element.isCompleted).map((element,index) => creatingElement(element,index))}
      </ul>
    </section>
  );
}
export default Main;
