var socket = io.connect('http://192.168.0.106:5000');

socket.on('pong', function (data) {
    $('body').css("background-color","red");
});

$(document).ready(function() {
    $("#hello").click(function(){
        socket.emit('ping', { duration: 2 });
    }); 
});
