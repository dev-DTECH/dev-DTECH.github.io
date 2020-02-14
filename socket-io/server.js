let io =require('socket.io')(4000)
console.log("Server online")

io.on('connection',socket =>{
    console.log('user connected');
    socket.emit('hello',"hello world")
})