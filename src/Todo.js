import { ListItem, ListItemText, List, ListItemAvatar } from '@mui/material';
import React from 'react'

function Todo(props) {
    return (
        <List>
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Your todo"/>
            </ListItem>
        </List>
    )
}

export default Todo;
