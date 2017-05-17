//Business Logic

function Place(name, coordinates, id, n){
  this.name = name;
  this.coordinates = coordinates;
  this.id = id;
}

var impala = new Place("Impala Club", [-1.301459, 36.769093], "impala");
var junction = new Place("Junction Mall", [-1.298140, 36.762118], "junction");
var prestige = new Place("Prestige Plaza", [-1.300146, 36.787080], "prestige");
var hub = new Place("The Hub", [-1.319509, 36.704475], "hub");
var uhuru = new Place("Uhuru Park", [-1.289825, 36.816476], "uhuru");

var locations = [impala, junction, prestige, hub, uhuru];

function showLocation(element, place) {
  var mapCanvas = document.getElementById(element);
  var thisPlace = new google.maps.LatLng(place.coordinates[0], place.coordinates[1]);
  var mapOptions = {center: thisPlace, zoom: 15,};
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new  google.maps.Marker({position: thisPlace});
  marker.setMap(map);
}

//User Interface
$(document).ready(function() {
  $("form#search-form").submit(function(event) {
    event.preventDefault();
  })

  var matchesFound = [];



  $(".search-bar").on('input', function() {
    $(".search-match").remove();
    var tester = new RegExp($(".search-bar").val(), "gi");
    matchesFound = [];
    var notMatched = [];

    locations.forEach(function(location) {
      if(tester.test(location.name)) {
        matchesFound.push(location);
      } else {
        notMatched.push(location);
      }
    })

    matchesFound.forEach(function(match) {
      $(".drop-locations").append("<div class='search-match "+match.id+"'>"+match.name+"</div>");
    })

    locations.forEach(function(location) {
      $("." + location.id).click(function() {
        $("#drop-down-map").addClass("drop-down-map-shown");
        showLocation("drop-down-map", location);
      })
    })

    if($(".search-bar").val() === "") {
      $(".search-match").remove();
      $("#drop-down-map").removeClass("drop-down-map-shown");
    }

  });



  /*for(var i = 0; i < locations.length; i++) {
    alert(i)
    $("button#"+locations[i].id).click(function() {
      alert(i);
      showLocation("drop-down-map", locations[i]);
      $("#drop-down-map").addClass("drop-down-map-shown");
    });
  } */




  var icons = [".cont", ".prof"];
  icons.forEach(function(icon) {
    $(icon).hover(function() {
      $(icon + "-uni-words").fadeToggle();
      $(icon).toggleClass("icon-expanded");
    })
  })

});
