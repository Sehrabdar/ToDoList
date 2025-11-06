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
     console.log(req.body);
     
     const addedTodos= todolist.map((todoitem, index) => ({
          id: index + 1,
          task: todoitem.task,
          completed: todoitem.completed
     }));
     todos.push(...addedTodos);
     res.status(200).json(addedTodos);
});
// app.put('/todos/:id', (req, res) =>

//  {
     
//  });

const port = 3000;
app.listen(3000, () => 
{
console.log(`Server is running! on port ${port}`);
});






