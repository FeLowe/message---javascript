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
