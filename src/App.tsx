import { Box, Button, Container, List, Typography } from "@mui/material"

import AddIcon from '@mui/icons-material/Add';
import ListItemTodo from "./components/ListItemTodo";


function App() {



  const TODO = [
    {
      id: 1,
      description: "Hacer la cama",
      status: false
    },
    {
      id: 2,
      description: "Comprar pan",
      status: false
    },
    {
      id: 3,
      description: "Lavar la ropa",
      status: false
    },
    {
      id: 4,
      description: "Hacer la comida",
      status: false
    },
    {
      id: 5,
      description: "Hacer la cena",
      status: false
    },
  ]


  return (
    <Container> 
      <Typography variant="h1" fontSize={40} textAlign={"center"} sx={{marginY:5}}>Lista de tareas</Typography>
      <Box component={"section"} sx={{ width: '100%', maxWidth: 360, bgcolor: 'InfoBackground', paddingX:4, paddingY:2, margin:"auto", borderRadius:2}}>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <h2>Agregar tarea</h2>
          <Button>
            <AddIcon sx={{fontSize:35, cursor:"pointer", color:"powderblue"}}/> 
          </Button>
        </Box>
        <List>
          {
            TODO.map((todo, index) => (
              <ListItemTodo 
                key={todo.id} 
                description={todo.description} 
                id={todo.id} 
                index={index}
              />
            ))
          }
        </List>
      </Box>
    </Container>
  )
}

export default App



