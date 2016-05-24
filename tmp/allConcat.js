var Message = require('./../js/message.js').Message;
$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var fromField = $('#from').val();
    var messageField = $('#message').val();

    var newMessage = new Message(toField, fromField, messageField);

    $('#output').text(newMessage.read());
  });
});

$(document).ready(function(){
  $('#address-form').submit(function(event){
    event.preventDefault();
    var address = $('#address').val();
    console.log(address);

    $('#outputForAddress').text(address);
  });
});

$(document).ready(function(){
  $('#color-form').submit(function(event){
    event.preventDefault();
    var color = $('#color').val();
    $('#outputForColor').append(color);
  });
});

$(document).ready(function(){
  $('#color-form').submit(function(event){
    event.preventDefault();
    $('#time-color').text(moment());
  });
  $('#address-form').submit(function(event){
    event.preventDefault();
    $('#time-address').text(moment());
  });
  $('#email').submit(function(event){
    event.preventDefault();
    $('#time-email').text(moment());
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
    {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
