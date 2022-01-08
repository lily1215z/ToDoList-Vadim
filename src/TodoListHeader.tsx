import React from "react";

type TodoListHeaderPropsType = {
    title: string
}
// чтоб не писать постоянно слово props используем деструктуризацию в параметрах {title}
//React.FC - указываем что испол функциональн компонента
// const TodoListHeader = ({title}: TodoListHeaderPropsType) => {...}
const TodoListHeader: React.FC<TodoListHeaderPropsType> = ({title}) => {
    return <h3>{title}</h3>
}

export default TodoListHeader;