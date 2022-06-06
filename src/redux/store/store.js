
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ToDoListReducer from "../reducer/todolistreducer";

import thunk from 'redux-thunk'

const initialState = { ToDoList : { ToDos : []}};

const reducer = combineReducers({ ToDoList : ToDoListReducer});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;