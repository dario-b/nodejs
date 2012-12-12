$(document).ready(function()
{
    $("#main").load("weather.html");
    
    $("#home_btn").click(function()
    {
        $("#main").load("home.html");
        $("body").css("background-image", "url('image/home_background.jpg')");
    });
    
     $("#control_btn").click(function()
    {
        $("#main").load("control.html");
    });
    
     $("#weather_btn").click(function()
    {
        $("#main").load("weather.html");
        $("body").css("background-image", "url('image/sunny_background.jpg')");
        
    });
    
});