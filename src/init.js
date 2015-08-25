$(document).ready(function(){
  window.dancers = [];
  window.footballs = [];
  window.players = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.95,
      $("body").width() * Math.random() * 0.95,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    if (dancer.constructor === BallDancer) {
      window.footballs.push(dancer);
    } else if (dancer.constructor === BlinkyDancer){
      // do nothing
    } else {
      window.players.push(dancer);
    }
  });

  $(".lineUpButton").on("click", function(event){
    var spacing = $("body").height() / (dancers.length+1);
    var middle = $("body").width() / 2;
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].setPosition(i*spacing,middle);
      dancers[i].top = i * spacing;
      dancers[i].left = middle;
      dancers[i].hasBall = null;
    }
  });

  $(".passButton").on("click", function(event){
    for (var j = 0; j < players.length; j++) {
      players[j].hasBall = null;
    }
    for (var i = 0; i < footballs.length; i++) {
      if (i >= players.length) {
        break;
      }
      var rand = Math.floor(Math.random() * players.length);
      if (players[rand].hasBall === null) {
        players[rand].hasBall = footballs[i];
        footballs[i].setPosition(players[rand].top, players[rand].left+25)
      }
    }
  });

});

