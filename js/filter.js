/*
This script is to filter the html div.
src: 
https://bootsnipp.com/snippets/r1Z7d
https://www.w3schools.com/howto/howto_js_active_element.asp
*/

    $(document).ready(function(){
      $(".filter-button").click(function(){
          var value = $(this).attr('data-filter');
          if(value == "all")
          {
            $('.filter').show('5000');
          }
          else
          {
            $(".filter").not('.'+value).hide('10000');
            $('.filter').filter('.'+value).show('10000');  
          }
      });

    // Get the container element
    var buttonContainer = document.getElementById("filter-div");

    // Get all buttons with class="btn" inside the container
    var buttons = buttonContainer.getElementsByClassName("btn");

    // Loop through the buttons and add the active class to the clicked button
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("btn-primary");
        current[0].className = current[0].className.replace(" btn-primary", "");
        this.className += " btn-primary";
      });
    }
    });
