//Toggles the navbar from collapsed to showing.
function colToggle(){
  if(document.getElementById("top-nav").className == "collapse navbar-collapse"){
    document.getElementById("top-nav").className = "navbar-collapse";
  }else{
    document.getElementById("top-nav").className = "collapse navbar-collapse";
  }
}

//If other area on screen is clicked aside from the collapse toggle nav-bar closes.
$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $("#top-nav").hasClass("navbar-collapse");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      document.getElementById("top-nav").className = "collapse navbar-collapse";
    }
});
