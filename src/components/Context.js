import { createContext, useContext, useState } from "react";

const ToDoContext = createContext();

export default function Context({children}) {
    const [toDoList,setToDoList] = useState(
        [
            {title: "Learn JavaScript", isCompleted: true},
            {title: "Learn React", isCompleted:false},
            {title: "Have a life!", isCompleted:false}
        ]
    );
    const [activeList, setActiveList] = useState(toDoList.filter((element) => !element.isCompleted))

    const [filtered, setFiltered] = useState(0);

    return(
        <ToDoContext.Provider value={{toDoList, setToDoList,activeList, setActiveList,filtered, setFiltered}}>
            {children}
        </ToDoContext.Provider>
    )
};

export function useList(){
    return useContext(ToDoContext);
}
