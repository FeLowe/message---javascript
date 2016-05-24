(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Message = function(to, from, messageText){
  this.to = to;
  this.from = from;
  this.messageText = messageText;
};

exports.Message.prototype.read = function() {
  return "Dear " + this.to + ", " + this.messageText + " Yours truly, " + this.from;
};

},{}],2:[function(require,module,exports){
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

},{"./../js/message.js":1}]},{},[2]);
