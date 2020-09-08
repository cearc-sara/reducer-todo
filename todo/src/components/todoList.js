import React from 'react'
import ToDo from './todo'

const ToDoList = (props) => {
    return(
        <div className="todo-list">
            {props.toDoList.map((item) => (
                <ToDo
                key={item.id}
                item={item}
                toggleCompleted={props.toggleCompleted}
                />
            ))}
        <button 
                className="clear-btn" 
                onClick={props.clearItem}>Clear Completed</button>
        </div>
    )
}
export default ToDoList;