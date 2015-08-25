var TaylorDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer red" style="width:30px;height:30px" src="http://www.redelephants.com/images/201.gif"></img>');
  this.setPosition(this.top, this.left);  // must setPosition on new node so it starts in correct position
  this.hasBall = null;
  this.goingRight = true;
};

TaylorDancer.prototype = Object.create(Dancer.prototype);
TaylorDancer.prototype.constructor = TaylorDancer;
TaylorDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  if (this.goingRight) {
    this.left += 10;
  } else {
    this.left -= 10;
  }
  if (this.left < 10) {
    this.goingRight = true;
  }
  if (this.left > $("body").width()-10) {
    this.goingRight = false;
  }
  this.setPosition(this.top, this.left);
  if(this.hasBall){
    this.hasBall.setPosition(this.top, this.left+25);
  }
};

