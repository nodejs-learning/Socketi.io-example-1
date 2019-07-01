

const socket = io.connect('http://localhost:4000',{'forceNew':true});

socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });




