import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodo({open, dialogHandler, todo, editTodo}) {
  const [editText, setEdiText] = React.useState(todo.text);
 
  const textHandler = () => {
    editTodo(todo.id, editText);
    dialogHandler();
  };

  return (
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Você tem certeza que quer editar a anotação abaixo?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <TextField defaultValue={editText} fullWidth onChange={(e) =>setEdiText(e.target.value)}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Não</Button>
          <Button onClick={textHandler}>Sim</Button>
        </DialogActions>
      </Dialog>
    
  );
}
