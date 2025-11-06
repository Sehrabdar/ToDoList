const express = require("express");
const app = express();
app.use(express.json());
const todos = [];
app.get('/todos', (req, res) => 
{
     console.log("New Request received.");
     res.json(todos);
});
app.post('/todos', (req, res) => 
{
     const todolist = req.body;
     const addedTodos= todolist.map((todoitem, index) => ({
          id: index + 1,
          task: todoitem.task,
          completed: todoitem.completed
     }));
     todos.push(...addedTodos);
     res.status(200).json(addedTodos);
});
app.put('/todos/:id', (req, res) =>
{
     let Userid = parseInt(req.params.id);
     const todo = todos.find(t => t.id === Userid);
     if(todo){
          todo.task = req.body.task != undefined ? req.body.task : todo.task;
          todo.completed = req.body.completed !=  undefined ? req.body.completed : todo.completed;
     } else{
          res.json({message: 'todo not found'})
     }
     res.json({ message: `User with ID ${Userid} has been updated.`,   todos})
});

const port = 3000;
app.listen(3000, () => 
{
console.log(`Server is running! on port ${port}`);
});






