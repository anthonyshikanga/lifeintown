//Business Logic
function doNothing() {
};

function Loc(name, coordinates){
  this.name = name;
  this.coordinates = coordinates;
}

var fred = new Loc("Home", [-1.264567, 36.804261]);

function firstPlace(element) {
  var mapCanvas = document.getElementById(element);
  var thisPlace = new google.maps.LatLng(fred.coordinates[0], fred.coordinates[1]);
  var mapOptions = {center: thisPlace, zoom: 15,};
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new  google.maps.Marker({position: thisPlace});
  marker.setMap(map);
}

//User Interface
$(document).ready(function() {
  $("button#smack-1").click(function() {
    $("#place-1").toggle();
    firstPlace("place-1");
    $("#place-1").css("position", "fixed");
  });

  var icons = [".cont", ".prof"];
  icons.forEach(function(icon) {
    $(icon).hover(function() {
      $(icon + "-uni-words").fadeToggle();
      $(icon).toggleClass("icon-expanded");
    })
  })

});
