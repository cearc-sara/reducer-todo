

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
            return state.map(
                (item) => 
                item.id === action.payload ? 
                { ...item, completed: !item.completed } : item)
        
        case "CLEAR_COMPLETED":
            return state.filter(
                (item) => item.completed === false)
        
        default:
            return state;
    }
}