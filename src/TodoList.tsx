import React from "react";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import {TaskType} from "./App";
import Task from "./Task";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}
const TodoList = (props: TodoListPropsType) => {
    //используем спред оператор что не расписывать отдельно
    return (
        <div>
            <TodoListHeader title={props.title}/>
            {/*<h3>What to learn</h3>*/}
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>

                {/*id={props.tasks[0].id}*/}
                {/*title={props.tasks[1].title}*/}
                {/*isDone = {props.tasks[2].isDone}*/}
                <Task key={props.tasks[0].id} {...props.tasks[0]}/>
                <Task key={props.tasks[1].id} {...props.tasks[1]}/>
                <Task key={props.tasks[2].id} {...props.tasks[2]}/>
                {/*<li key={props.tasks[0].id}>*/}
                {/*    <input type="checkbox" checked={props.tasks[0].isDone}/>*/}
                {/*    <span>{props.tasks[0].title}</span>*/}
                {/*</li>*/}
                {/*<li key={props.tasks[2].id}>*/}
                {/*    <input type="checkbox" checked={props.tasks[2].isDone}/>*/}
                {/*    <span>{props.tasks[2].title}</span>*/}
                {/*</li>*/}
            </ul>
            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
                {/*<button>All</button>*/}
                {/*<button>Active</button>*/}
                {/*<button>Completed</button>*/}
            </div>
        </div>
    )
}

export default TodoList;