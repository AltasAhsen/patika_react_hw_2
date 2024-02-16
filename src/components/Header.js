import { useToDoList } from "./Context";

function Header() {
  const { toDoList, setToDoList,setUncheckedAmount } = useToDoList();
  
  function addElement(e) {
    e.preventDefault();
    if (e.target.value.trim() !== "") {
      const changedToDoList = [
        ...toDoList,
        { title: e.target.value, isCompleted: false },
      ];
      setToDoList(changedToDoList);
      setUncheckedAmount(
        changedToDoList.filter((element) => !element.isCompleted).length
      );
      e.target.value = "";
    }else{
        alert("Empty Value")
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={(e) => {
            e.key === "Enter" && addElement(e);
          }}
        />
      </form>
    </header>
  );
}

export default Header;
