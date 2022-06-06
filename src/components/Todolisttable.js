
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import {useDispatch} from "react-redux";
import { onRemoveTodo, onCompletedTodo } from '../redux/action/ApiCall';
import { Checkbox } from '@mui/material';

export default function ToDoListTable({ToDo}) {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  const dispatch = useDispatch();
  const handleClick = (ToDo) => {
    const {id} = ToDo;
    // console.log(id);
    dispatch(onRemoveTodo(id))
  }
  const handleCkeckbox = () => {
    const {id} = ToDo;
    dispatch(onCompletedTodo(id))
  }
  const {completed} = ToDo;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: "100%", backgroundColor:"#009688", borderRadius:"none"}} aria-label="simple table">
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': {}, display:"flex", justifyContent:"space-between",paddingX:6 }}>
              <TableCell><Checkbox onClick={() => handleCkeckbox(ToDo)} color="default"/></TableCell>
              {completed ? <TableCell sx={{fontSize:25, width:"100%", fontFamily:"monospace", textDecoration:"line-through", color:"#880e4f"}} component="th" scope="row">{ToDo.title}</TableCell> 
                        :   <TableCell sx={{fontSize:25, width:"100%", fontFamily:"monospace"}} component="th" scope="row">{ToDo.title}</TableCell>
              }
              {/* <TableCell sx={{fontSize:25, width:"100%"}} component="th" scope="row">{ToDo.title}</TableCell> */}
              <TableCell component="td" scope="row">
                <Button onClick={() => handleClick(ToDo)} variant="contained" color={theme.primary}>Remove</Button>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
