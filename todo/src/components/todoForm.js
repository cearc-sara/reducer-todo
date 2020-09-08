import React, {useState} from 'react';


const ToDoForm = (props) => {
    const {dispatch} =props
    const [newToDo, setNewToDo] = useState()

    const handleChanges = (e) => {
        setNewToDo(e.target.value)
    }


    return (
        <>
        <form >
               <input
                type='text'
               name='task'
                value={newToDo}
                onChange={handleChanges}
                />
                </form>
            <button onClick={() => dispatch({type: 'ADD_TODO', payload: newToDo})}>Add To Do</button>
            <button 
                className="clear-btn" 
                onClick={() => dispatch({ type: "CLEAR_COMPLETED"})}>Clear Completed</button>   
       
        </>
    )
        
    
    }
    export default ToDoForm











// import React from 'react'

// class ToDoForm extends React.Component {
//     constructor() {
//         super();
//         this.state ={
//             task:''
//         }
//     }
//     handleChanges = (e) => {
//         this.setState({
//           task: e.target.value
//         })
//       }
    
//       handleSubmit =(e) => {
//         e.preventDefault();
//         this.props.addItem(this.state.task)
//       }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                 type='text'
//                 name='task'
//                 value={this.state.task}
//                 onChange={this.handleChanges}
//                 />
//                 <button>Add To Do</button>
               
//             </form>
//         )
//     }
// }
// export default ToDoForm;