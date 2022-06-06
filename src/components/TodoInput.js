import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { onAddTodo } from "../redux/action/ApiCall";



export default function ToDoInput() 
{
  const [value, setvalue] = useState("");
  const [defvalue, setdefvalue] = useState("");
  const dispatch = useDispatch();
  const ToDoList = useSelector((state) => state.ToDoList);
  const { ToDos } = ToDoList;
  const setid = uuid();
  const handleChange = (event) =>{
    setvalue(event.target.value)
  }

  const handleClick = (Id, Value, Status) =>{
    dispatch(onAddTodo(Id, Value, Status))  
  }

  return (
    <Box
      component="form"
      sx={{
        backgroundColor:"#ffebee",
        display:"flex",
        justifyContent:"space-between",
        "& > :not(style)": { m: 5}
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(event) => handleChange(event)} sx={{width:"80%"}} color="error" id="outlined-basic" label="ToDo Task" variant="outlined" />
      <Button onClick={() => (!value) ? ToDos : (handleClick(setid, value, false))}  sx={{ height: 55, width: "20%", color:"#009688"}} variant="outlined" color="error">Add ToDo</Button>
      {/* <Button onClick={handleClear} sx={{ height: 55, width: "10%" }} variant="outlined" color="error">Clear</Button> */}
    </Box>
  );
}
