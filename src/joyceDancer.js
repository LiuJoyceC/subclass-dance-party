// joyce Dancer

var JoyceDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.isblue = true;
  this.$node = $('<img class="dancer red" style="width:30px;height:30px" src="http://sports-logos-screensavers.com/user/RiceOwls.jpg"></img>');
  this.setPosition(top, left);
  this.hasBall = null;
};

JoyceDancer.prototype = Object.create(Dancer.prototype);
JoyceDancer.prototype.constructor = JoyceDancer;
JoyceDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if (this.isblue) {
    this.$node.attr("src", "http://content.sportslogos.net/logos/33/813/full/2587.png");
    this.isblue = false;
  } else {
    this.$node.attr("src", "http://sports-logos-screensavers.com/user/RiceOwls.jpg");
    this.isblue = true;
  }
};

