import React, {useState, useEffect} from 'react';
import {Button, FormControl, Input, InputLabel} from '@mui/material';
import './App.css';
import Todo from './Todo';
import db from "./firebase";
import firebase from "firebase";


function App() {
  const [todos, setTodos] = useState ([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamps', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
  },[]);  
  
  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1>Your todo list</h1>
      <form>
      <FormControl>
      <InputLabel htmlFor="my-input">Enter your todo here</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
