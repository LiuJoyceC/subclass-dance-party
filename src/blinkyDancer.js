var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer ref" style="width:30px;height:30px" src="http://cdn.flaticon.com/png/256/26708.png"></img>');
  this.setPosition(top, left);

  this.$node.on("mouseenter", function(event){
    $(this).attr("src", "https://cdn3.iconfinder.com/data/icons/american-football/436/Referee-512.png");
  });
  this.$node.on("mouseleave", function(event){
    $(this).attr("src", "http://cdn.flaticon.com/png/256/26708.png");
  });

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
// BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // this.oldStep.call(this);
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
  };