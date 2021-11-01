import { ListItem, ListItemText, List, ListItemAvatar, Button } from '@mui/material';
import React from 'react';
import db from './firebase';

function Todo(props) {
    return (
        <List>
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Your todo"/>
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
        </List>
    )
}

export default Todo;
