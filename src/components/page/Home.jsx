import React, { useState } from 'react'
import { List } from '@mui/material';
import { Container } from '@mui/system';
import Form from '../Form';
import TodoItem from '../TodoItem';
import styled from 'styled-components'

export default function Home() {
  const[todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  };
  
  const editTodo = (id, editText) => {
    var todosArray = [...todos];
    for(var i in todosArray) {
     if (todosArray[i].id == id) {
        todosArray[i].text = editText;
      }
    }
    setTodos(todosArray);

  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !==id);
    setTodos(filtered);
  }
    return (
      <>
      <Title>DIGITE SUAS ANOTAÇÕES ABAIXO</Title>
    <Container maxWidth="xs" style={{marginTop:"1em"}}>
      <Form addTodo={addTodo} />
      <List sx={{ marginTop: "1em"}}>
        {todos.map((todo) => (
          <Content key={todo.id}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
          </Content>
        ))}
        
      </List>
          <p>Para editar, clique no texto.☝️</p>
    </Container>
      </>      
        
    )
}

const Content = styled.div`
  margin-top: 1em;
`
const Title = styled.h3`
  font-size: 20px;
  text-align: center;  
`