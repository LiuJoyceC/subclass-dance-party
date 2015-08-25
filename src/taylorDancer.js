var TaylorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer red" style="width:30px;height:30px" src="http://www.redelephants.com/images/201.gif"></img>');
  this.step();
  this.hasBall = null;
  this.goingRight = true;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
TaylorDancer.prototype = Object.create(Dancer.prototype);
TaylorDancer.prototype.constructor = TaylorDancer;
// TaylorDancer.prototype.oldStep = Dancer.prototype.step;
TaylorDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // this.oldStep.call(this);
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    if (this.goingRight) {
      this.left += 10;
    } else {
      this.left -= 10;
    }
    if (this.left < 10) {
      this.goingRight = true;
    }
    if (this.left > $("body").width()) {
      this.goingRight = false;
    }
    this.setPosition(this.top, this.left);
    if(this.hasBall){
      this.hasBall.setPosition(this.top, this.left+25);
    }
  };

