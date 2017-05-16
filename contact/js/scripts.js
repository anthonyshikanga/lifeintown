$(document).ready(function() {
  var count = 0;
  //var images = ["js/four.jpg", "js/six.jpg", "js/rave.jpeg", "js/seven.jpg", "js/eight.jpg"]
  var images = ["img/dj-1.jpg", "img/rave-bg-3.jpg", "img/six.jpg", "img/upcoming.jpg"]
  //var image = $(".page-bg");

  //image.css("background-image", "url(" + images[count] + ")");

  setInterval(function() {
    //Add image to class
    $(".bg").css("background-image", "url(" + images[count] +")")
    //Add class
    $(".page-bg").addClass("bg");
      /*image.css("background-image", "url(" + images[count] + ")");
      image.fadeIn(300);
      image.fadeOut(300); */

      count ++;

    if (count === images.length) {
      count = 0;
    }
  }, 5000);

  //Navbar Icon Animation
  var icons = [".cont", ".prof"];
  icons.forEach(function(icon) {
    $(icon).hover(function() {
      $(icon + "-uni-words").fadeToggle();
      $(icon).toggleClass("icon-expanded");
    })
  })

  setInterval(function() {

  })

});
