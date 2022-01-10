import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

// type FilterValuesType = string; or
export type FilterValuesType = 'all' | 'active' | 'completed' //можно было просто напсиать string но мы знаем что есть точно 3 положения а так может залелететь разные строки

function App() {
    //BLL:
    const todoListTitle: string = 'What to learn';

    // let tasks: Array<TaskType> = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS/ES6', isDone: true},
    //     {id: 3, title: 'React', isDone: false}
    // ]

    //Hook useState
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/ES6', isDone: true},
        {id: 3, title: 'React', isDone: false}
    ])

    //function for delete tasks
    const removeTask = (taskID: number) => {
        // const filterTasks = tasks.filter(t => t.id !== taskID)
        // setTasks(filterTasks)
        //or
        setTasks(tasks.filter(t => t.id !== taskID))
    }

    const [filter, setFilter] = useState<FilterValuesType>('all')
    //type FilterValuesType = 'all' | 'active' | 'completed'

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
    // испол промежуточную перемен для фильтрации. тк нам не надо удалять совсем а просто переключаться  с одного на другое
    // let tasksForRender = tasks  //tasksForRender передаем в ТоДоЛист
    // if(filter === 'active') {
    //     tasksForRender = tasks.filter(t => t.isDone === false)
    // }
    // if(filter === 'completed') {
    //     tasksForRender = tasks.filter(t => t.isDone === true)
    // }
//Рефакторинг кода, занесли ее в функцию, заменили иф-елс
    const getTasksForRender = () => {
        switch(filter) {
            case 'active':
                return tasks.filter(t => t.isDone === false)
                // return tasks.filter(t => !t.isDone)  ВебШторм подсказывает что можно рефакторить
            case 'completed':
                return  tasks.filter(t => t.isDone === true)
                // return  tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }
    // const tasksForRender = getTasksForRender() если испол промежуточную переменную то ее потом передаем в tasks в TodoList
    //UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={getTasksForRender()}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;


