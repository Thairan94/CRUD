import React, { useState } from 'react'
import { Button, Paper, TextField } from '@mui/material'
import styled from 'styled-components';

export default function Form({addTodo}) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
       const todoObj = {text: text, id:id}
       setId(id + 1);
       addTodo(todoObj);
       document.getElementById("outlined-basic").value=null;
    }

    return (
        <Paper style={{padding: "1em"}}>
            <Container>
                <TextField 
                    id="outlined-basic" 
                    label="Anotações" 
                    variant="outlined" 
                    fullWidth
                    onChange={(e) => setText(e.target.value)}
                />
                <Button 
                    variant="text"
                    onClick={() => todoCreate(text)}
                    >
                    ADD
                </Button>
            </Container>
        </Paper>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    
` 