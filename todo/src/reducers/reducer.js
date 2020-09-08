

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
                completed: false,
                id: new Date()
            }
        case "TOGGLE_COMPLETED":
            return{
                completed: !state.completed
            }
        default:
            return state;
    }
}