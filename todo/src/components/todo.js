import React from 'react'

const ToDo = (props) => {
    const {dispatch, item} = props
    return (
        <div 
          onClick={() => dispatch({ type: "TOGGLE_COMPLETED"})}
         className={`item${item.completed ? " completed" : ""}`}>
             <p>{item.task}</p> 
        </div>
    )
}
export default ToDo;