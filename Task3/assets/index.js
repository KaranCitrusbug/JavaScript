$(document).ready(function() {
    var $myButton = $("#Button");

    $myButton.text("click");
  
    $myButton.addClass("buttonColor");
  
    
    $myButton.on("click", function() {
      
      $("#Para").toggle();
    });
  });
  