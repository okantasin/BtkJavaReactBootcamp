import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import EmployeeService from '../services/EmployeeService';

export default function EmployeeList({ employees, refresh, setRefresh }) {
    const employeeService = new EmployeeService();
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {employees.map((emp) => (
                <ListItem>

                    <ListItemAvatar>

                        <Avatar
                            src={`images/${emp.id}.jpg`}
                            alt={`${emp.firstName} ${emp.lastName}`}
                        >
                            <ImageIcon />
                        </Avatar>

                    </ListItemAvatar>

                    <ListItemText
                    
                        primary={`${emp.firstName} ${emp.lastName}`}

                        secondary="Jan 9, 2014" />

                </ListItem>
            ))}

        </List>
    );
}
