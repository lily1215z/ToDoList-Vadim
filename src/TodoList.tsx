import React from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {FilterValuesType, TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}
const TodoList = (props: TodoListPropsType) => {
    //используем спред оператор что не расписывать отдельно
    const tasksComponents = props.tasks.map(i => {
        return (
            <Task
                key={i.id}
               // {...i}
                id={i.id}
                title={i.title}
                isDone={i.isDone}
                removeTask={props.removeTask}
            />
        )
    })
    //or
    // const tasksComponents = props.tasks.map(i => <Task key={i.id} {...i} />)

    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksComponents}
            </ul>
            <div>
                <Button
                    title={'All'}
                    onClickHandler={()=> props.changeFilter('all')}/>
                <Button
                    title={'Active'}
                    onClickHandler={()=> props.changeFilter('active')}/>
                <Button
                    title={'Completed'}
                    onClickHandler={()=> props.changeFilter('completed')}/>
            </div>
        </div>
    )
}

export default TodoList;