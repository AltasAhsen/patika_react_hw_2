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
    const [uncheckedAmount, setUncheckedAmount] = useState(toDoList.filter((element) => !element.isCompleted).length)

    return(
        <ToDoContext.Provider value={{toDoList, setToDoList,uncheckedAmount, setUncheckedAmount}}>
            {children}
        </ToDoContext.Provider>
    )
};

export function useToDoList(){
    return useContext(ToDoContext);
}


