$(document).ready(function(){
  $('#color-form').submit(function(event){
    event.preventDefault();
    var color = $('#color').val();
    $('#outputForColor').append(color);
  });
});
