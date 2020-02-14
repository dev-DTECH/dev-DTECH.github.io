let socket =io('http://localhost:4000')
socket.on("hello",data =>{
    console.log(data)
})