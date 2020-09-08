

export const initialState = {
    todos: [    {
        item: '',
        completed: false,
        id: ''
    }
    ]
}

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                item: action.payload,
                
            }
        case "TOGGLE_COMPLETED":
            return{
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
}