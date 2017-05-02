//Toggles the navbar from collapsed to showing.
function colToggle(){
  if(document.getElementById("top-nav").className == "collapse navbar-collapse"){
    document.getElementById("top-nav").className = "navbar-collapse";
  }else{
    document.getElementById("top-nav").className = "collapse navbar-collapse";
  }
}

//Controls the left and right arrow key functions for the carousel
function newTitlesLeft(){
  var parentTitles = document.getElementById('titles');
  var parentTitlesInd = document.getElementById('title-indicator');
  descTitles = parentTitles.getElementsByTagName('div');
  descTitlesInd = parentTitlesInd.getElementsByTagName('*');
  for(var i = 0; i < descTitles.length; i++){
    if(descTitles[i].className == "item active"){
      descTitles[i].className = "item";
      descTitlesInd[i].className="";
      if(i == 0){
        descTitles[descTitles.length - 1].className = "item active";
        descTitlesInd[descTitlesInd.length - 1].className = "active";
      }else{
        descTitles[i-1].className = "item active";
        descTitlesInd[i-1].className = "active"
      }
      break;
    }
  }
}
function newTitlesRight(){
  var parentTitles = document.getElementById('titles');
  var parentTitlesInd = document.getElementById('title-indicator');
  descTitles = parentTitles.getElementsByTagName('div');
  descTitlesInd = parentTitlesInd.getElementsByTagName('*');
  for(var i = 0; i < descTitles.length; i++){
    if(descTitles[i].className == "item active"){
      descTitles[i].className = "item";
      descTitlesInd[i].className="";
      if(i == descTitles.length - 1){
        descTitles[0].className = "item active";
        descTitlesInd[0].className = "active";
      }else{
        descTitles[i+1].className = "item active";
        descTitlesInd[i+1].className = "active"
      }
      break;
    }
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
