const express = require("express")
const app = express();
const cors = require('cors')
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer,{
    cors: {}
  });

io.on("connection", socket => { 
    console.log('New connection', socket.id, Date());
    socket.on('chat:message', (data) => {
        console.log(`${socket.id} : [${JSON.stringify(data)}]`)
        socket.emit('chat:message','Prueba')
    })
});

app.get('/', (req,res)=>{
   res.send('Hola Pedro')
})

httpServer.listen(3000, ()=>{
    console.log('Servidor inicializado')
});