import React from 'react'
import ToDo from './todo'

const ToDoList = (props) => {
    const {state, dispatch} = props
    return(
        <div className="todo-list">
             {state.map((item) => ( 
                <ToDo
                key={item.id}
                item={item}
                dispatch={dispatch}
                />
            ))}
        
        </div>
    )
}
export default ToDoList;