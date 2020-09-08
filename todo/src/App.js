import React, {useReducer} from 'react';
import ToDoList from './components/todoList'
import ToDoForm from './components/todoForm'

import '../src/components/todo.css'
import { reducer, initialState } from './reducers/reducer';


// const toDoListData = [
//   {
//     task: 'Wash Laundry',
//     id: 882,
//     completed: false,
//   },
//   {
//     task: 'Dry Laundry',
//     id: 4165,
//     completed: false,
//   },
//   {
//     task: 'Cook Dinner',
//     id: 4185,
//     completed: false,
//   },
//   {
//     task: 'Clean Room',
//     id: 156,
//     completed: false,
//   }
// ];

function App () {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const [state, dispatch] = useReducer(reducer, initialState)
    
    
      
    
  

  //  const toggleCompleted = (clickedItemId) => {
  //   setToDoList(
  //     toDoList.map((item) => {
  //       if(item.id === clickedItemId) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         }
  //       } else {
  //         return item;
  //       }
  //     })
  //   )
  // }

  // const addItem =(itemTask) => {
  //   const newItem ={
  //     task: itemTask,
  //     id: Date.now(),
  //     completed: false,
  //   };
  //   setToDoList( [...toDoList, newItem]
  //   )
  // }

  // const clearItem =() => {
  //   setToDoList(
  //     toDoList.filter((item) => {
  //       if(item.completed === true) {
  //         return ''
  //       }else {
  //         return item;
  //       }
  //     })
  //   )
  // }

  // handleChanges = (e) => {
  //   this.setState({
  //     task: e.target.value
  //   })
  // }

  // handleSubmit =(e) => {
  //   e.preventDefault();
  //   this.addItem(this.state.task)
  // }

  
    return (
      <div className="App">
      <div className="header">
        <h1>To Do List</h1>
        <ToDoForm 
          dispatch={dispatch}
        />
      </div>

      <ToDoList
        dispatch={dispatch}
        state={state}
      />
    </div>
    );
  }


export default App;
