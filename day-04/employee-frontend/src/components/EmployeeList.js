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
import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";


function EmployeeList({ employees, refresh, setRefresh ,filterText,setFilterText}) {
    const employeeService = new EmployeeService();


    const handleDelete=(id)=>{
        console.log("delete",id);
        employeeService.deleteOneEmployees(id).then((resp)=>{
            console.log(resp);
            setRefresh(!refresh);
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {employees.map((emp) => (
                <ListItem
                    key={emp.id}
                    secondaryAction={
                        <IconButton
                        edge='end'
                        aria-label='delete'
                        onClick={()=>handleDelete(emp.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                >

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
export default EmployeeList;