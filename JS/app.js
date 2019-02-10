/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Hover effect for schedule-section

$(".cardio-content").on({
  mouseenter: function () {
    $("cardio-name").css("background-color", "#ee542d")
  },
  mouseleave: function () {
    $("cardio-name").css("background-color", "black")
  },

})
