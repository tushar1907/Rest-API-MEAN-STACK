const express = require('express')

//setup express app
const app = express();

//initialize routes
app.use('/api',require('./routes/api'));

// app.get('/api',(request, response)=>{
//     console.log("Get Request ");
//     response.send({name:'Tushar'});
// })

// app.post('/api',(request, response)=>{
//     console.log("Get Request ");
//     response.send({name:'Tushar'});
// })

// app.put('/api',(request, response)=>{
//     console.log("Get Request ");
//     response.send({name:'Tushar'});
// })

// app.delete('/api',(request, response)=>{
//     console.log("Get Request ");
//     response.send({name:'Tushar'});
// })


//listen for request
app.listen(4000, ()=> {
    console.log("Now listening for request on port 4000");
})