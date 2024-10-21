import { Box, Container, List, Typography } from "@mui/material"
import ListItemTodo from "./components/ListItemTodo";
import { useTodoStore } from "./store/todoList";
import AddTask from "./components/AddTask";

function App() {
  const todoList = useTodoStore(state => state.todoList);

  return (
    <Container> 
      <Typography variant="h1" fontSize={40} textAlign={"center"} sx={{marginY:5}}>Lista de tareas</Typography>
      <Box component={"section"} sx={{ width: '100%', maxWidth: 360, bgcolor: 'InfoBackground', paddingX:4, paddingY:2, margin:"auto", borderRadius:2}}>
        <AddTask/>
        
        {/* List of tasks */}
        <List>
          {
            todoList.map((todo, index) => (
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



