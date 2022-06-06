import React, { useEffect } from "react";
import {ApiCall} from "./redux/action/ApiCall";
import { useDispatch, useSelector } from "react-redux";
import ToDoInput from "../src/components/TodoInput";
import ToDoList from "./components/Todolisttable";
import ToDoListTable from "./components/Todolisttable";

function App() {
  const dispatch = useDispatch();
  const ToDoList = useSelector((state) => state.ToDoList);
  const { loading, error, ToDos } = ToDoList;
  

  useEffect(() => {
    dispatch(ApiCall());
  }, [dispatch]);

  if (!loading) {
    console.log(ToDos);
  }
    
  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : error ? (
        <div>...error</div>
      ) : (
        <div>
          <ToDoInput/>
          {ToDos.map((ToDo,i) => (
            <div key={i}>
              <ToDoListTable ToDo={ToDo} />
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
}

export default App;
