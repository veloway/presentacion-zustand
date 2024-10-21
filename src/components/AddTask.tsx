import { Box, Button } from "@mui/material";
import FormDialog from "./FormDialog";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

export default function AddTask() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <h2>Agregar tarea</h2>
                <Button onClick={handleClickOpen}>
                    <AddIcon
                        sx={{
                            fontSize: 35,
                            cursor: "pointer",
                            color: "powderblue",
                        }}
                    />
                </Button>
            </Box>
            <FormDialog open={open} handleClose={handleClose} />
        </>
    );
}
