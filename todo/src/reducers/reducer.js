

export const initialState = [
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
  ];

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return[
                ...state,
                {
                    task: action.payload,
                    id: Math.random(),
                    completed: false
                },
                
            ]
        case "TOGGLE_COMPLETED":
                console.log("thisstate", state, action);
                return state.map((task) => {
                  if (task.id === action.payload) {
                    console.log("task?", task);
                      return { ...task, completed: !task.completed }
                  } else {
                      return task
                  }
                });
        
        case "CLEAR_COMPLETED":
            return state.filter(
                (item) => item.completed === false)
        
        default:
            return state;
    }
}