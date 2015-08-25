// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function(){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };
Dancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

