let io =require('socket.io')(process.env.PORT || 3000)
console.log("Server online")

io.on('connection',socket =>{
    console.log("user connected");

})