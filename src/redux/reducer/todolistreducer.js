
import { TODO_LIST_FAIL, TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_ADD_ITEM, TODO_REMOVE_ITEM, TODO_COMPLETE_TODO } from "../constants/todolistconstants"

const ToDoListReducer = (state ={ ToDos : [] }, action) =>{
    switch(action.type){
        case TODO_LIST_REQUEST:
            return {loading : true};
        case TODO_LIST_SUCCESS:
            return {loading : false, ToDos : action.payload}
        case TODO_LIST_FAIL:
            return {loading : false, error : action.payload}
        case TODO_ADD_ITEM:
            return { ToDos : [...state.ToDos,action.payload]}
        case TODO_REMOVE_ITEM:
            return{ ToDos : state.ToDos.filter((ToDo) =>{
                if(ToDo.id !== action.payload)
                return ToDo;})
            }
        case TODO_COMPLETE_TODO:
            return { ToDos : state.ToDos.map((ToDo) =>{
                if(ToDo.id === action.payload)
                ToDo.completed = (!ToDo.completed);
                return ToDo;
            })}
        default:
            return state;
    }
}

export default ToDoListReducer;