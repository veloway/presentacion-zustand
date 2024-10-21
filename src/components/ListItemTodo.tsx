import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface ListItemTodoProps {
    description: string;
    id: number;
    index: number;
}

export default function ListItemTodo({
    description,
    id,
    index
}: ListItemTodoProps) {

    const [checked, setChecked] = useState([0]);

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    return (
        <ListItem
            secondaryAction={
                <IconButton>
                    <DeleteIcon sx={{color:"#ff7272", fontSize:28}}/>
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton
                role={undefined}
                onClick={handleToggle(index)}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.includes(index)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": String(id) }}
                        sx={{ color: "powderblue", '&.Mui-checked': { color: "powderblue" } }}
                    />
                </ListItemIcon>
                {
                    checked.includes(index) ? 
                    <ListItemText primary={description} sx={{textDecoration:"line-through"}}/> 
                    : 
                    <ListItemText primary={description}/>
                }
            </ListItemButton>
        </ListItem>
    );
}
