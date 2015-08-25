var TaylorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.$node = $('<img class="dancer red" style="width:20px;height:20px" src="http://www.redelephants.com/images/201.gif"></img>');
  this.step();
  this.hasBall = null;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
TaylorDancer.prototype = Object.create(Dancer.prototype);
TaylorDancer.prototype.constructor = TaylorDancer;
TaylorDancer.prototype.oldStep = Dancer.prototype.step;
TaylorDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.left = $("body").width() * Math.random() * 0.95
    this.setPosition(this.top, this.left);
    if(this.hasBall){
      this.hasBall.setPosition(this.top, this.left+15);
    }
  };

