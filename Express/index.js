const express = require("express");
const users = require('./MOCK_DATA.json')

const app = express();


//Routes

app.get("/", (req, res) => {
    res.send("Hello World from Express!");
});

app.get("/api/users",(req,res)=> {
    res.json(users)
})

app.get("/users",(req,res)=>{
    const html = `
        <ul>
            ${users.map((user)=> `<li>${user.first_name}</li> `)}
        </ul>
    `
    res.send(html)
})

//get user with id

app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
}).patch((req,res)=> {
    return res.json({status:"Pending"})
}).delete('api/users:id',(req,res)=> {
    return res.json({status:"Pending"})
})

app.post('api/users',(req,res)=> {
    return res.json({status:"Pending"})
})




app.listen(8000, ()=> console.log("Server is logged in"))