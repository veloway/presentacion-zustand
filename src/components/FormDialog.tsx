import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface FormDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function FormDialog({ open, handleClose }: FormDialogProps) {
  
  //TODO: Agregar tarea

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <form>
          <DialogTitle>Agregar nueva tarea</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="tarea"
              name="tarea"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Agregar</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
