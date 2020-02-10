let io =require('socket.io')(3000)
console.log("Server online")

io.on('connection',socket =>{
    console.log("user connected");

})