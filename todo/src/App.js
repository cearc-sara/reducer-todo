import React, {useReducer} from 'react';
import {initialState, reducer} from './reducers/reducer'

import './App.css';
import ToDoForm from './components/todoForm';
import ToDoList from './components/todoList';


const toDoListData = {
  todos: [
  {
    task: 'Wash Laundry',
    id: 882,
    completed: false,
  },
  {
    task: 'Dry Laundry',
    id: 4165,
    completed: false,
  },
  {
    task: 'Cook Dinner',
    id: 4185,
    completed: false,
  },
  {
    task: 'Clean Room',
    id: 156,
    completed: false,
  }
]};


function App() {
const [state, dispatch] = useReducer(reducer, initialState);



const toggleCompleted = (clickedItemId) => {
  dispatch({
    toDoList: toDoListData.map((item) => {
      if(item.id === clickedItemId) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
  })
}

const addItem =(itemTask) => {
  const newItem ={
    task: itemTask,
    id: Date.now(),
    completed: false,
  };
  dispatch({
    toDoList: [...toDoListData, newItem]
  })
}

const clearItem =() => {
  dispatch({
    toDoList: toDoListData.filter((item) => {
      if(item.completed === true) {
        return ''
      }else {
        return item;
      }
    })
  })
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <ToDoForm 
        addItem={addItem}/>
      </header>
      <ToDoList
      toggleCompleted={toggleCompleted}
      clearItem={clearItem}
      />
    </div>
  );
}

export default App;
