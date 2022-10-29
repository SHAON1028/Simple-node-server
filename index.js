const express = require('express')
const app = express()
const cors = require('cors')
const port  = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Simple node server Running")
})

const users = [
       {id:1,name:'Sabana',email:'sabana@gmail.com'},
       {id:2,name:'babana',email:'babana@gmail.com'},
       {id:3,name:'kabana',email:'kabana@gmail.com'},
       {id:4,name:'labana',email:'labana@gmail.com'},
]
// app.post('/users',(req,res)=>{
//     console.log(req.body)
// })

app.post('/users',(req,res)=>{
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    console.log(user)
    res.send(user)

})
app.get('/users',(req,res)=>{
if(req.query.name){
    const search = req.query.name
    const filtered = users.filter(usr=> usr.name.toLowerCase().indexOf(search)>=0)
    res.send(filtered)

    console.log(filtered);
}

else{
    res.send(users)
}
})
app.listen(port,()=>{
    console.log(`Simple node server running on port ${port}`)
})
