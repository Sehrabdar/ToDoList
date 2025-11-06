/* const express = require ('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/users', (req, res) => {
    res.json({message: 'Reurning list of users'});
});
app.post('/users', (req,res) => {
     const newUser = req.body;
     res.json({message: 'user created success', user: newUser});
});
app.put('/users', (req, res) => {
     const userId = req.params.dictionary;
     const updatedUser = req.body;
     res.json({message: `User with id ${userId} has been updated.`, updatedUser});
});
app.delete('/users',(req, res) => {
     const userId = req.params.dictionary;
     res.json({message: `User with ${userId} has been deleted`});
});
app.listen(port, () =>{
     console.log(`Server is running on http://localhost:${port}`);
     
});

const person = {
     name : "Kash",
 id : 200,
 LN: "Doe",
 fullName: function(){
     return this.name + " "+ this.LN;
 }
};
console.log(person.fullName());

const arr = ['aaabaab'];
const str = arr[0];
let countA= 0;
let countB = 0;
for (let u of str){
     if(u === 'a'){
          countA++;
     }
     else if (u ==='b'){
          countB++;
     }    
}
console.log(`No. of occurences of 'a' is: ${countA}`);
console.log(`No. of occurences of 'b' is: ${countB}`);
*/
// 
// let arr = [10,20,30,40];

// let ans = arr.reduce((acc, curr) =>  {

// return acc+curr;

// }, 0);

// console.log(ans);
// let arr = [1,2,3,4,5];
// arr.forEach((value, index) => 
// {
//      console.log(index, " ", value);
     
// })
// function getSum(arr){
//      let sum = 0;
//      arr.forEach(num => {
//           sum += num;
//      });
//      return sum;
// }
// console.log(getSum(arr));
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






