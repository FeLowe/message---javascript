$(document).ready(function(){
  $('#address-form').submit(function(event){
    event.preventDefault();
    var address = $('#address').val();
    console.log(address);

    $('#outputForAddress').text(address);
  });
});
