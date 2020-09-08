import React, {useReducer} from 'react'
import {initialState, reducer} from './reducers/reducer'

const ToDoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);


   const handleChanges = (e) => {
        dispatch()
         
        
      }
    
    const  handleSubmit =(e) => {
        e.preventDefault();
        dispatch()
      }
    
        return (
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='item'
                value={state.item}
                onChange={handleChanges}
                />
                <button>Add To Do</button>
                
            </form>
        )
    }

export default ToDoForm;