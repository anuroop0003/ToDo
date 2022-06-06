import axios from "axios";
import {
  TODO_LIST_SUCCESS,
  TODO_LIST_REQUEST,
  TODO_LIST_FAIL,
  TODO_ADD_ITEM,
  TODO_REMOVE_ITEM,
  TODO_COMPLETE_TODO
} from "../constants/todolistconstants";

const ApiCall = () => (dispatch) => {
  dispatch({
    type: TODO_LIST_REQUEST,
  });
  axios
    .get("/ToDo")
    .then((res) => {
      dispatch({
        type: TODO_LIST_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: TODO_LIST_FAIL,
        payload: err,
      });
    });
};

const onAddTodo = (id, title, completed) => (dispatch) => {
  // console.log("dispatch is " + AddToDo.value)
  dispatch({type: TODO_ADD_ITEM, payload: {id,title,completed}})
}

const onRemoveTodo = (id) =>(dispatch) =>{
  dispatch({type: TODO_REMOVE_ITEM, payload:id})
}

const onCompletedTodo = (id) =>(dispatch) =>{
  dispatch({type:TODO_COMPLETE_TODO, payload:id})
}

export  {ApiCall, onAddTodo, onRemoveTodo, onCompletedTodo};
