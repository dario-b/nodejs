var socket = io.connect('http://192.168.1.123:5000');

socket.on('pong', function (data) {
    $('body').css("background-color","red");
});


socket.on('sensor',function(data2) {
     value = data2.data + " ˚C"
     $('#ts1').text(value);
});




$(document).ready(function() {
    $("#hello").click(function(){
        socket.emit('ping', { duration: 2 });
    }); 

});
