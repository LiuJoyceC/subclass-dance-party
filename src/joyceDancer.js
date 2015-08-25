// joyce Dancer

var JoyceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.isblue = true;
  this.$node = $('<img class="dancer red" style="width:30px;height:30px" src="http://sports-logos-screensavers.com/user/RiceOwls.jpg"></img>');
  this.setPosition(top, left);
  this.hasBall = null;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
JoyceDancer.prototype = Object.create(Dancer.prototype);
JoyceDancer.prototype.constructor = JoyceDancer;
JoyceDancer.prototype.oldStep = Dancer.prototype.step;
JoyceDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

    if (this.isblue) {
      this.$node.attr("src", "http://content.sportslogos.net/logos/33/813/full/2587.png");
      this.isblue = false;
    } else {
      this.$node.attr("src", "http://sports-logos-screensavers.com/user/RiceOwls.jpg");
      this.isblue = true;
    }
  };

