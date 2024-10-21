import { Box, Container, List, Typography } from "@mui/material"
import AddTask from "./components/AddTask";

function App() {

  return (
    <Container> 
      <Typography variant="h1" fontSize={40} textAlign={"center"} sx={{marginY:5}}>Lista de tareas</Typography>
      <Box component={"section"} sx={{ width: '100%', maxWidth: 360, bgcolor: 'InfoBackground', paddingX:4, paddingY:2, margin:"auto", borderRadius:2}}>
        <AddTask/>
        {/* TODO: List of tasks */}
        <List>

        </List>
      </Box>
    </Container>
  )
}

export default App



