$(document).ready(function() {

  var count = 0;
  var images = ["js/girls-rave.jpeg", "js/six.jpg", "js/rave.jpeg", "js/seven.jpg", "js/eight.jpg"]
  var image = $(".page-bg");

  image.css("background-image", "url(" + images[count] + ")");

  setInterval(function() {
    image.fadeOut(300, function() {
      image.css("background-image", "url(" + images[count++] + ")");
      image.fadeIn(300);
    });
    if (count === images.length) {
      count = 0;
    }
  }, 10000);

});
