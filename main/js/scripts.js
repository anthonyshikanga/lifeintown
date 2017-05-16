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
