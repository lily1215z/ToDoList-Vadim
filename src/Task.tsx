import React from "react";
import {TaskType} from "./App";

// type TaskPropsType = TaskType & {} берем описание все из TaskType и потом еще будем что-то докидывать в обьект
// type TaskPropsType = {  чтоб не писать отдельно импортируем TaskType, т.к. они одинаковые
//     id: number,
//     title: string,
//     isDone: boolean
// }
const Task: React.FC<TaskType> = ({id, title, isDone}) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    )
}

export default Task;